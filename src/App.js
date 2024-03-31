import { Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './page/Counter';
import Login from './page/Login';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/counter" element={<Counter />}/>
      </Routes>
    </div>
  );
}

export default App;
