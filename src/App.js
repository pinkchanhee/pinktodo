import React from 'react';
import Todo from './components/Todo';
import CurrentTime from './components/CurrentTime';
import RandomQuote from './components/text';
import './components/CurrentTime.css';
import './components/text.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
      <CurrentTime />
      <RandomQuote />
      <div className='component-container'>

      </div>
    </div>
  );
}

export default App;
