import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element={ <Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
