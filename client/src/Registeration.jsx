import { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from "./UserContext.jsx";

export default function Registration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);




    async function register(ev) {
        ev.preventDefault();
        const { data } = await axios.post('/register', { username, password });
        setLoggedInUsername(username);
        setId(data.id);

        // try {
        //     const response = await axios.post('http://localhost:3333/register', {
        //         username: 'user1',
        //         password: 'user1'
        //     });

        //     console.log('Registration successful:', response.data);
        //     // Handle the response or perform any other actions after successful registration
        // } catch (error) {
        //     console.error('Error during registration:', error.message);
        //     // Handle the error, e.g., display an error message to the user
        // }


    }

    return (

        <div className='flex justify-center items-center h-screen bg-blue-600'>

            <form className='w-96 p-6 shadow-lg bg-white rounded-md' onSubmit={register}>
                <h1 className='text-3xl block text-center font-semibold'>Registration</h1>
                <hr></hr>
                <div className='mt-3'>
                    <label htmlFor='Username' className='block text-base mb-2'>Username</label>
                    <input value={username}
                        onChange={ev => setUsername(ev.target.value)}
                        type="text" id='Username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter User Name...'></input>
                </div>
                <div className='mt-3'>
                    <label htmlFor='Password' className='block text-base mb-2'>Password</label>
                    <input value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        type="text" id='Password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password...'></input>
                </div>
                <div className='mt-5'>
                    <button type='submit' className='flex justify-center items-center border-2 bg-orange-500 text-black py-1 px-5 w-full'>Register</button>
                </div>
            </form>

        </div>
    );
}

//change for into htmlFor since it is REACT