import { useState } from "react";

export default function Registration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div className='flex justify-center items-center h-screen bg-blue-600'>

            <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
                <h1 className='text-3xl block text-center font-semibold'>Registration</h1>
                <hr></hr>
                <div className='mt-3'>
                    <label for='Username' className='block text-base mb-2'>Username</label>
                    <input value={username}
                        onChange={ev => setUsername(ev.target.value)}
                        type="text" id='Username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter User Name...'></input>
                </div>
                <div className='mt-3'>
                    <label for='Password' className='block text-base mb-2'>Password</label>
                    <input value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        type="text" id='Password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password...'></input>
                </div>
                <div className='mt-5'>
                    <button type='submit' className='flex justify-center items-center border-2 bg-orange-500 text-black py-1 px-5 w-full'>Register</button>
                </div>
            </div>

        </div>
    );
}