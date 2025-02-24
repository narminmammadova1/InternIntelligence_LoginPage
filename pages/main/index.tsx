import FallingAnimation from '@/animation/animation'
import Link from 'next/link'
import React from 'react'
import {  signOut } from "firebase/auth";
import {auth} from "../../firebase"
import { useRouter } from 'next/router';
import {motion} from 'framer-motion'
import { liVariants } from '@/motions'
const Main = () => {

const router=useRouter()
const {push}=router

const handleLogOut=()=>{

  signOut(auth)
  push("/")
}

  return (
    <div>
       <div><header 
       
       className=' w p-4 flex  justify-between'>
        <Link href="/">
          <button className=' text-red-500'><motion.h1  variants={liVariants}
       initial="initial"
       whileHover="whileHover" >Home</motion.h1></button>

        </Link>
        <Link href="/">
          <motion.button
           variants={liVariants}
           initial="initial"
           whileHover="whileHover" 
          onClick={handleLogOut} className=' border rounded-md  px-2 border-red-500 text-white '>Log Out</motion.button>

        </Link>
      </header></div>
<div className='flex justify-center mt-10'>
     
         
      <div className='flex justify-center'>
      <FallingAnimation/>

      </div>
    </div>
    </div>
    
  )
}

export default Main
