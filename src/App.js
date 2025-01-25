
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EgoChoices from './Routes/EgoChoices';
import EgoBattle from './Routes/EgoBattle';
import Homepage from './Routes/Homepage';
import Credits from './Routes/Credits';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/credits' element={<Credits />} />
      <Route path='/play' element={<EgoChoices />} />
      <Route path='/battle' element={<EgoBattle />} />
    </Routes>
  );
}

export default App;
