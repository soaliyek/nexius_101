import {useState} from 'react';
import '../styles/questionForm.css';

function QuestionForm(){
    const [inputValue, setInputValue] = useState('Ask your question here');

    return (
        <div className="nx-question-form">
            <p>{inputValue}</p>
            <input type="text" placeholder="Ask your question here..." onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => alert(inputValue)}>Submit</button>
        </div>
    );
}

export default QuestionForm;