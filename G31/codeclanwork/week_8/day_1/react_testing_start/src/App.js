import React from 'react';
import './App.css';
import CommentBox from "./containers/CommentBox";
import Counter from './components/Counter';
import MunroContainer from './containers/MunroContainer';


function App() {
  return (
    <div>
    <Counter />
    <CommentBox />
    <MunroContainer/>
    </div>
  );
}

export default App;
