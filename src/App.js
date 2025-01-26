
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EgoChoices from './Routes/EgoChoices';
import Homepage from './Routes/Homepage';
import Credits from './Routes/Credits';
import EndPage from './Routes/EndPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/credits' element={<Credits />} />
      <Route path='/play' element={<EgoChoices />} />
      <Route path='/end' element={<EndPage state={2}/>} />
    </Routes>
  );
}

export default App;
