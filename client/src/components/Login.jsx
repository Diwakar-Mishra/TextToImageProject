import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion'
function Login() {

    // signup or login
    const [state, setstate] = useState('Login');

    // Login from khula hua hai ya nahi .. uss information ko set karne k liye from the context Api  
    const { setShowLogin } = useContext(AppContext);

    // we have to prevent the scrolling functionality on opening of our Login from 
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center'>
            <motion.form action="" className='relative bg-white p-10 rounded-xl text-slate-500'
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h1 className='text-center text-2xl text-neutral-700 font-medium '>{state}</h1>
                <p className='text-sm'>Welcome back! Please sign in to continue</p>
                {/* full name div => SignUp k time par hi dikhegaa  */}
                {state !== 'Login'
                    &&
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.profile_icon} width={25} alt="" />
                        <input type="text" name="" placeholder='Full Name' required id="" className='outline-none text-sm' />
                    </div>
                }
                {/* email field here */}
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email" name="" placeholder='Email id' required id="" className='outline-none text-sm' />
                </div>
                {/* password field is here */}
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.lock_icon} alt="" />
                    <input type="password" name="" placeholder='Password' required id="" className='outline-none text-sm' />
                </div>

                <p className='text-sm text-blue-600 w-full my-4 cursor-pointer'>Forgot Password ? </p>

                <button className='bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 '>{state == 'Login' ? 'Login' : 'Create Account'}</button>
                {state === 'Login'
                    ?
                    <p className='mt-5 text-center' >Don`t have an account? <span className='text-blue-600 hover:text-blue-700 cursor-pointer' onClick={() => setstate('Sign Up')}>Sign Up</span></p>
                    :
                    <p className='mt-5 text-center' >Already have an account? <span className='text-blue-600 hover:text-blue-700 cursor-pointer' onClick={() => setstate('Login')}>LogIn</span></p>
                }
                {/* CLOSE ICON for the closing of the form */}
                <img src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' onClick={() => setShowLogin(false)} />
            </motion.form>
        </div>
    )
}

export default Login
