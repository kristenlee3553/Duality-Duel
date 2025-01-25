
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EgoChoices from './Routes/EgoChoices';

function App() {
  return (
    <Routes>
      <Route path='/' element={<EgoChoices />} />
    </Routes>
  );
}

export default App;
