import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { motion } from 'framer-motion'
import './Navigation.scss'

const Navigation = () => {
  return (
    <div className='navbar'>
    <Sidebar/>
    <div className='wrapper'>
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.51}}> Aarav Mody</motion.span>
        <div className='social'>
            <a href='https://www.linkedin.com/in/aaravmody/'><img src='/linkedin.png' alt=''></img></a>
            <a href='https://github.com/aaravmody'><img src='/github.png' alt=''></img></a>
        </div>
    </div>
    </div>
  )
}

export default Navigation