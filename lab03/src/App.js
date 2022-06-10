// import logo from './logo.svg';
import './App.css';
import StudentOffer from './Models/StudentOffer';
import { useState } from 'react';
import Home from './Pages/Home';
import Student from './Models/Student';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import AddOffer from './Pages/AddOffer';
import GroupOffers from './Pages/GroupOffers';
import GroupOffer from './Models/GroupOffer';
import Group from './Models/Group';
import AddGroupOffers from './Pages/AddGroupOffer';
import Login from './Pages/Login';
import Logout from './Components/Logout';

function App() {
  const [offers, setOffers] = useState([
    new StudentOffer("URGENT", ["SQL", "C#", "WPF"], "BD2", new Student("Karol", "lorak@mail.com")),
    new StudentOffer("Pliska, serio potrzebuje to zdać", ["Assembler"], "OiAK2", new Student("Tomasz", "zsamot@mail.com"))
  ]);

  const [groupOffers, setGroupOffers] = useState([
    new GroupOffer(new Group("TEAM X", [new Student("Julka", ""), new Student("Czaro", "")]), "Grupa do zada specjalnych", "Lekcje muzyki"),
    new GroupOffer(new Group("Ekipa", [new Student("Friz", ""), new Student("Mini Majk", "")]), "Szukamy kogoś, kto zrobi ten projekt za nas", "Druty")
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <ul className='navbar'>
          <li className='navelement'><NavLink to='/'>Oferty Studentów</NavLink></li>
          <li className='navelement'><NavLink to='/add'>Dodaj Ofertę</NavLink></li>
          <li className='navelement'><NavLink to='/groups'>Oferty Grup</NavLink></li>
          <li className='navelement'><NavLink to='/groups/add'>Dodaj Ofertę Grupy</NavLink></li>
          <li className='navelement'><NavLink to='/login'>Loguj</NavLink></li>
          <li className='navelement'><Logout/></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home offers={offers}/>}/>
          <Route path="/add" element={<AddOffer setOffers={setOffers} offers={offers} />}/>
          <Route path="/groups" element={<GroupOffers groupOffers={groupOffers}/>}/>
          <Route path="/groups/add" element={<AddGroupOffers offers={groupOffers} setOffers={setGroupOffers}/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Logout/> */}
    </div>
  );
}

export default App;
