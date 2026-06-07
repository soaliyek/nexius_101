import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/Atoms';


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

  // Loader
  const [isDataLoading, setIsDataLoading] = useState(false);

  // To store the API response data
  const [surveyData, setSurveyData] = useState({});
  // Keep track of previous and next questions
  const prevQuestionNum = questionNum === 1 ? 1 : questionNum - 1;
  const nextQuestionNum = questionNum === 10 ? 10 : questionNum + 1;
  // For errors
  const [error, setError] = useState(null);

  // Fetch survey data when component mounts
  // using fetch api to get data from the API endpoint and store it in state
  /*
  useEffect(() => {
    setIsDataLoading(true);
    fetch(`http://localhost:8000/survey`)
      .then(response => response.json()
        .then(({ surveyData }) => {
          setSurveyData(surveyData);
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.log("nexius@EError:" + error);
          setIsDataLoading(false);
        })
      )
  }, [])
  */

  // Fetch survey data using async/await syntax
  // Get the data and store it the say way: in a state variable
  useEffect(() => {
    const fetchSurveyData = async () => {
      setIsDataLoading(true);

      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const data = await response.json();
        setSurveyData(data.surveyData);
        setIsDataLoading(false);
      } catch (error) {
        setError(error);
        console.log("nexius@EError:" + error);
        setIsDataLoading(false);
      } finally {
        setIsDataLoading(false);
      }
    }

    fetchSurveyData();
  }, [])

  return (
    <SurveyContainer>
      <h1>Survey Page</h1>
      <QuestionTitle>Question {questionNum}</QuestionTitle>
      {isDataLoading ? 
        (
          <Loader />
        ) : (
          <QuestionContent>
            {surveyData[questionNum]}
          </QuestionContent>
        )
      }
      

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
