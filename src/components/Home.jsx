import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/lv.png'

const Home = () => {


    useEffect(
        () => {
        const tees = document.getElementById('tees');
        const hoodies = document.getElementById('hoodies');
        const middleBox = document.getElementById('middleBox');
        const logo = document.getElementById('logo');
        const iID1 = setTimeout(() => {
          middleBox.style.visibility = 'visible';
          middleBox.style.top = '-100%';
        }, 1000);
        const iID2 = setTimeout(() => {
          tees.style.visibility = 'visible';
          tees.style.opacity = '1';
        }, 2000);
        const iID3 = setTimeout(() => {
          hoodies.style.visibility = 'visible';
          hoodies.style.opacity = '1';
        }, 3000);
        const iID4 = setTimeout(() => {
          logo.style.opacity = '1';
          logo.style.visibility = 'visible';
        }, 4000);


        return () => {
          clearTimeout(iID1)
          clearTimeout(iID2)
          clearTimeout(iID3)
          clearTimeout(iID4)
        }
        }, [])

    return (
        <>
        <div id='blackBgc'>
          <div id='hoodies'>
            <NavLink className='button' to='/hoodies'>
                Hoodies
            </NavLink>
          </div>
          <div id='tees'>
          <NavLink className='button' to='/tees'>
                Tees
            </NavLink>
          </div>
          <div id='middleBox'>
          <div id='logo'>
            <img alt='logo' src={logo}/>
          </div>
          </div>
        </div>
        </>
    );
}

export default Home;