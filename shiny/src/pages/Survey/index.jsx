import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import colors from '../../colors';


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

function Survey() {
  const { questionNumber } = useParams();
  const questionNum = parseInt(questionNumber);

  return (
    <SurveyContainer>
      <h1>Survey Page</h1>
      <QuestionTitle>Question {questionNum}</QuestionTitle>
      <QuestionContent>
        This is the content for question {questionNum}. <br/> Please answer the question to the best of your ability.
      </QuestionContent>

      <LinkWrapper>
        {questionNum > 1 && (
          <span>
            <Link to={`/survey/${questionNum - 1}`}>Previous</Link>
          </span>
        )}
        {questionNum < 10 && (
          <span>
            <Link to={`/survey/${questionNum + 1}`}>Next</Link>
          </span>
        )}
        {questionNum === 10 && (
          <span>
            <Link to="/results">View Results</Link>
          </span>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
}

export default Survey;
