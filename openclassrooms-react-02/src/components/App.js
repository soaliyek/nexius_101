import logo from '../assets/logo.svg';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Uncontrolled Form */}
        <form onSubmit={handleSubmit}>
          <h4>Uncontrolled Form</h4>
          <input type='text' name="my_input" placeholder="Enter text..." />
          <button type='submit'>Submit</button>
        </form>
      </header>
    </div>
  );
}

function handleSubmit(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const inputValue = formData.get('my_input');

  alert(`You entered: ${inputValue}`);
}

export default App;
