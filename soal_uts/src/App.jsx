//import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
// lakukan commit "selesai TODO 1" dan push 

import Beranda from './pages/Beranda';
import LainLain from './pages/LainLain';
import Mahasiswa from './pages/Mahasiswa/';
import Pendidikan from './pages/Pendidikan';
import Profil from './pages/Profil';
import Riset from './pages/Riset';

// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
        </main>
         {/* TODO 4 SideBar */}
      </div>
      {/* TODO 5 Footer */}
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 