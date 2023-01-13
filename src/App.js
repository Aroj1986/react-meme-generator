import './App.css';
import React, {Routes, Route} from 'react-router-dom'
import MemeLists from './MemeLists'
import Meme from './Meme'

function App() {

  return (
    <>
      <h1>React Meme Generator</h1>
      <Routes>
        <Route path="/" element={<MemeLists />}></Route>
        <Route path="/:id" element={<Meme />}></Route>
      </Routes>
    </>
  );
}

export default App;
