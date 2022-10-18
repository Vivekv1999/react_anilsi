import './App.css';
import Navbar from './Component/Navbar';
import Searchparamsss from './Component/L-53-searchparams/Searchparamsss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Company from './Component/L-55-NestedROUTING/Company';
import Otherbusi from './Component/L-55-NestedROUTING/Otherbusi';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/about'  element={<About/>}  />
          <Route  path='/Home'  element={<Home/>}  />
          <Route  path='/Searchparamsss'  element={<Searchparamsss/> }  />
          <Route  path='/Contact/'  element={<Contact/> } >
            <Route path="Company" element={<Company/ >}/>
            <Route path="Otherbusi" element={<Otherbusi/ >}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
