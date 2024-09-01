import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    try {

      setLoading(true);
      const res = await fetch('/api/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify(formData), // Convert the formData object to a JSON string and include it in the request body.
        }
      );
      const data = await res.json(); // Parse the response from the server as JSON.
      console.log(data);
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3x text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an acccount?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
