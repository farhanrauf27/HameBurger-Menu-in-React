import './Nav.css'
import React, { useState } from 'react';
function Nav(){


    const[menuOpen,setMenuOpen]= useState(false)
    function toggleMenu(){
        setMenuOpen(!menuOpen);
    }
    function closeMenu() {
        setMenuOpen(false);
      };
      let x;
      if(!menuOpen){
        x='☰'
      }
      else{
        x='X'
      }


    return(
        <>
       
        <div >
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
        <div className="hamburger-icon" onClick={toggleMenu}>
          {/* <FiMenu size={24}  /> */}
          <p className='mx-2' style={{textAlign:'right'}}>{x}</p>
        </div>
        <ul className="menu-items d-flex" style={{justifyContent:'space-between'}}>
          <li>Word <img style={{marginLeft:'40%'}} src="https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo.png" width={50} alt="" /></li>
          <li>Excel <img style={{marginLeft:'42%'}} src="https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Excel-Logo.png" width={50} alt="" /></li>
          <li>PowerPoint <img src="https://www.logo.wine/a/logo/Microsoft_PowerPoint/Microsoft_PowerPoint-Logo.wine.svg" width={60} alt="" /></li>
        </ul>
      </div>
    </div>
        </>
    );
}
export default Nav;