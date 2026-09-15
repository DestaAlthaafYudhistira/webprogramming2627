import React, { Component } from 'react' // class component header
import Header from './Header.jsx'
import Footer from './Footer.jsx'
const title ='react';
 class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>halo ini {title}</h1>
        <Footer />
      </div>
    );
  }
 }

 // function component
 const Footerr = function() {
  return (
     <div>
      <h3>Halaman footer</h3>
      <h3>componen ini dibuat menggunakan 
        Function bukan class</h3>
     </div>
  );
 }

export default App
