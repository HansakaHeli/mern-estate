import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };

  const handleSubmit = async (e) =>{
    e.preventDefault(); // Prevent the refresh of the page
    setLoading(true);
    const res = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(formData), // Convert the formData object to a JSON string and include it in the request body.
      }
    );
    const data = await res.json(); // Parse the response from the server as JSON.
    if(data.success ===false){
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    console.log(data);
  }

  console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3x text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmint={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an acccount?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
