import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext, useGlobalContext} from './context';

const Home = () => {
  const {openSidebar} = useGlobalContext()

  return (

    <main>
      <button className='sidebarBtn' onClick={openSidebar}>

      <FaBars />

      </button>

   

    </main>



  );
}

export default Home
