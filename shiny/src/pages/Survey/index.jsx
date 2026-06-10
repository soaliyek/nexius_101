import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { SurveyContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 30px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  // Get the question number from the URL parameters
  const { questionNumber } = useParams();
  const questionNum = parseInt(questionNumber);

  // Keep track of previous and next questions
  const prevQuestionNum = questionNum === 1 ? 1 : questionNum - 1;
  const nextQuestionNum = questionNum === 10 ? 10 : questionNum + 1;

  // Survey Context
  const { answers, saveAnswers } = useContext(SurveyContext);
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  // Fetch the survey data using our custom useFetch hook
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const surveyData = data?.surveyData || {};

  if(error) {
    return (
      <SurveyContainer>
        <h1>Survey Page</h1>
        <QuestionTitle>Question {questionNum}</QuestionTitle>
        <QuestionContent>
          Oups, something went wrong. Please try again later.
        </QuestionContent>
      </SurveyContainer>
    )
  }

  return (
    <SurveyContainer>
      <h1>Survey Page</h1>
      <QuestionTitle>Question {questionNum}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : Object.keys(surveyData).length === 0 ? (
        <QuestionContent>Oups, no survey data available.</QuestionContent>
      ) : (
        <QuestionContent>{surveyData[questionNum]}</QuestionContent>
      )}
      
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Yes
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          No
        </ReplyBox>
      </ReplyWrapper>

      <LinkWrapper>
        <span>
          <Link to={`/survey/${prevQuestionNum}`}>Previous</Link>
        </span>

        {surveyData[questionNum + 1] ? (
          <span>
            <Link to={`/survey/${nextQuestionNum}`}>Next</Link>
          </span>
        ) : (
          <span>
            <Link to="/results">View Results</Link>
          </span>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
}

export default Survey;
