"use client";
import Loading from '@/components/Loading';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false); 

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/auth/login', user);
      toast.success(response.data.message);
      setUser({
        email: "",
        password: "",
      });
      router.push('/');
    } catch (error: any) {
      setUser({...user, password: ""});
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex justify-center py-14'>
      { loading && 
        <Loading /> 
      }
      <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }} 
        className='w-full max-w-md p-8 bg-white dark:bg-gray-900 mx-auto rounded-lg shadow'
      >
        <h2 className='text-2xl dark:text-white mb-6 text-center'>Sign In</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Sign In</button>
        <div className='mt-3'>
          <Link href="/register" className='text-sm text-gray-500 dark:text-gray-400 hover:underline'>アカウントをお持ちではありませんか？新規登録</Link>
        </div>
      </form>
    </div>
  )
}

export default Login