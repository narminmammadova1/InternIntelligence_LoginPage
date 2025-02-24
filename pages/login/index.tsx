
import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
 import {auth} from "../../firebase"
import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import {motion} from 'framer-motion'
import { cardVariants, liVariants } from '@/motions'

const Login = () => {
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const [error,setError]=useState("")
 const [isLoading,setIsLoading]=useState(false)
 const router=useRouter()
const{push}=router
const handleLogin=async(e:React.FormEvent<HTMLFormElement>)=>{

  e.preventDefault()
  try{
    setIsLoading(true)
await signInWithEmailAndPassword(auth ,email,password)
localStorage.setItem("isLogin","true")
      toast.success("success")
setTimeout(()=>{push("/main")
},500)

  }catch(err){
    setError("invalid email or password")
    console.log("login error",err);
    
  }
  finally{setIsLoading(false)}
}
const disabled=isLoading
  return (
    <div className=''>
    
      <div className='w-full flex  justify-center mt-10'>      <h1 className='text-4xl  text-red-500'>Sign in</h1>
      </div>

      <div className='w-full m-auto mt-10 flex items-center justify-center  text-white text-center'>
<div className='lg:flex  w-3/4 gap-10'>
<div className='w-1/3 flex m-auto '>
        <Image className='w-[300px]' src="/login.png" width={200} height={200} alt='login'/>
       </div>
  <div className='lg:w-2/3 m-auto'>{error && <div className="text-red-500 mb-4">{error}</div>}

<form 
  className='p-8 border-2 text-black mt-4 border-red-500 rounded-md flex flex-col gap-4' 
  onSubmit={handleLogin}  
>
  <input 
    className='p-2 rounded-md text-black' 
    type="email" 
    placeholder='Email' 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
  />

  <input 
    className='p-2 rounded-md text-black' 
    type="password" 
    placeholder="Password" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)} 
  />

  <motion.button   
  variants={cardVariants}
                  initial="initial"
                  whileHover="whileHover"
disabled={disabled}
    type="submit" 
    className={`w-full rounded-md bg-red-500 p-2 ${ disabled ? "bg-opacity-25" : ""}`}
  >
    Sign In
  </motion.button>
</form>
<div className=''>
<p className='text-[12px] lg:text-base inline-block pe-2'>If you don&apos;t have an account</p>
<Link href="/signUp">
<motion.button 

variants={liVariants}
initial="initial"
whileHover="whileHover" className="text-red-500 lg:mt-4 text-[12px] lg:text-base">Sign Up</motion.button>
</Link>
</div></div>

      
</div>
        
      </div>
    </div>
  )


}

export default Login
