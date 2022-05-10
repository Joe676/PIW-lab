import logo from './logo.svg';
import './App.css';
import StudentOffer from './Models/StudentOffer';
import { useState } from 'react';
import Home from './Pages/Home';
import Student from './Models/Student';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddOffer from './Pages/AddOffer';

function App() {
  const [offers, setOffers] = useState([
    new StudentOffer("URGENT", ["SQL", "C#", "WPF"], "BD2", new Student("Karol", "lorak@mail.com")),
    new StudentOffer("Pliska, serio potrzebuje to zdać", ["Assembler"], "OiAK2", new Student("Tomasz", "zsamot@mail.com"))
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <ul className='navbar'>
          <li className='navelement'><a href='/'>Home</a></li>
          <li className='navelement'><a href='/add'>two</a></li>
          <li className='navelement'><a href='#'>three</a></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home offers={offers}/>}/>
          <Route path="/add" element={<AddOffer setOffers={setOffers} offers={offers}></AddOffer>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
