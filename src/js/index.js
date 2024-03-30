import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLight from './component/home.jsx';

const App = () => {
  return (
    <div>
      <TrafficLight />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));