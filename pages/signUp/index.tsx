
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, createUserWithEmailAndPassword, firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'
import { cardVariants, liVariants } from '@/motions'

const SignUp = () => {
  const router = useRouter();
const {push}=router
const [isLoading,setIsLoading]=useState(false)
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  interface signUpProps {
    email: string;
    password: string;
    name: string;
    surname: string;
  }

  const handleSignUp = async (values: signUpProps) => {
    const { email, password, name, surname } = values;

    try {
      setIsLoading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userRef = doc(firestore, "users", user.uid);
      await setDoc(userRef, {
        name: name,
        surname: surname,
        email: email,
        uid: user.uid,
      });
      toast.success("success")

      push("/login"); 

      
    } catch (err) {
       console.log("Signup error:", err);
      toast.error("This user already exists")

    }
    finally{setIsLoading(false)}
  };

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const disabled=isLoading
  return (
    <div>
      <motion.header
      
      variants={liVariants}
      initial="initial"
      whileHover="whileHover" className='p-4'>
        <Link href="/">
          <button className='text-red-500'>Log in</button>
        </Link>
      </motion.header>
      <div className='w-3/4 lg:w-1/2 m-auto mt-10 text-white text-center'>
        <h1 className='text-4xl text-red-500'>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {() => (
            <Form className='p-6 border-2 text-black mt-4 border-red-500 rounded-md flex flex-col gap-4'>
              <Field
                className='p-2 rounded-md text-black'
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />

              <Field
                className='p-2 rounded-md text-black'
                type="text"
                name="surname"
                placeholder="Surname"
              />
              <ErrorMessage name="surname" component="div" className="text-red-500" />

              <Field
                className='p-2 rounded-md text-black'
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <Field
                className='p-2 rounded-md text-black'
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />

              <Field
                className='p-2 rounded-md text-black'
                type="password"
                name="confirmPassword"
                placeholder="Repeat Password"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />

              <motion.button

               variants={cardVariants}
                                initial="initial"
                                whileHover="whileHover"
              disabled={disabled}
                type="submit"
                className={`w-full rounded-md bg-red-500 p-2 ${ disabled ? "bg-opacity-25" : ""}`}
              >
                Sign Up
              </motion.button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
