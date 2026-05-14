import logo from '../assets/logo.svg';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Form 1 */}
        <form onSubmit={handleSubmit}>
          <input type='text' name="my_input" placeholder="Enter text..." />
          <button type='submit'>Submit</button>
        </form>
      </header>
    </div>
  );
}

function handleSubmit(){

}

export default App;
