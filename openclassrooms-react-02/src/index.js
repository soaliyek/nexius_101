import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Banner from './components/Banner';
import TasksList from './components/TasksList';
import TaskProp from './components/TaskProp';
import logo from "./assets/nexius_logo.png"
import TaskCardConatiner from './components/TaskCardContainer';
import QuestionForm from './components/QuestionForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner>
      <img src={logo} alt="Nexius" className="nx-logo" />
      <h1 className="nx-title">nexius</h1>
    </Banner>
    {/* <TasksList /> */}
    <TaskCardConatiner />
    <App />
    < QuestionForm />
  </React.StrictMode>
);

