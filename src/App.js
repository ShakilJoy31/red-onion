import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakFast from './Pages/Home/TimeFood/BreakFast/BreakFast';
import Dinner from './Pages/Home/TimeFood/Dinner/Dinner';
import Lunch from './Pages/Home/TimeFood/Lunch/Lunch';
import UpperHome from './Pages/Home/UpperHome/UpperHome';
import Header from './Shered/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UpperHome></UpperHome>
      <Routes>
        <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
