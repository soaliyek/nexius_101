import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const questionNum = parseInt(questionNumber);

  return (
    <div>
      <h1>Survey Page</h1>
      <p>Question Number: {questionNum}</p>

      <div>
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
      </div>
    </div>
  );
}

export default Survey;
