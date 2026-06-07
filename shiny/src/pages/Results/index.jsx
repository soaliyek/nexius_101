import { useContext } from 'react';
import { SurveyContext } from '../../utils/context';

function Results() {
    const { answers } = useContext(SurveyContext);

    return(
        <div>
            <h1>Results Page</h1>
            <p>This is where the results of the survey will be displayed.</p>
            <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
    );
}

export default Results;