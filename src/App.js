
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EgoChoices from './Routes/EgoChoices';
import Homepage from './Routes/Homepage';
import Credits from './Routes/Credits';

function App() {
  return (
    <Routes>
      <Route path='/' element={<EgoChoices />} />
      <Route path='/Homepage' element={<Homepage />} />
      <Route path='/Credits' element={<Credits />} />
    </Routes>
  );
}

export default App;
