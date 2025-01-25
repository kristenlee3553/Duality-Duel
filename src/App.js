
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EgoChoices from './Routes/EgoChoices';
import Homepage from './Routes/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<EgoChoices />} />
      <Route path='/Homepage' element={<Homepage />} />
    </Routes>
  );
}

export default App;
