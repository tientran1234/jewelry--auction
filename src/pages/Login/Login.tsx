import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa6";
import { GiJewelCrown } from "react-icons/gi";
import { GiJeweledChalice } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=''>
            <h1 className='text-center mt-32  text-3xl'>Welcome Back</h1>
            <div className='flex justify-center mt-2'>
            <GiJewelCrown  className='text-center text-4xl mx-4 ' />
            <GiJeweledChalice className='text-center text-4xl mx-4' />
            </div>

           
            <div className='flex justify-center items-center  '>

                <div className='flex flex-col mt-12   w-2/6 h-3/4 max-[900px]:text-[14 px]  px-32 py-8 transform -translate-y-5 shadow-2xl'>
                    <Label htmlFor="Email" >Email <span className='text-red'>*</span></Label>
                    <Input className='my-4   ' type="email" id='Email' placeholder="Email" />
                    <Label htmlFor="Password" className='mt-2'>Password <span className='text-red'>*</span></Label>
                    <Input type="password" id="Email" className='my-4' placeholder="Password" />
                    <div className='flex justify-between mt-2'> 
                    <Link to="/recovery" className='text-blue'>Forgot password ?</Link>
                    <Link to="/register" className='text-blue'>Register</Link>
                    </div>
                 
                    <Button className='mx-32 mt-8'>Login</Button>
                    <div className="flex justify-center w-full mt-2">
                        <hr className="mr-1 mt-3 border border-gray-300 w-2/3" />
                        <p>Or</p>
                        <hr className="ml-1 mt-3 border border-gray-300 w-2/3" />
                    </div>
                    <Button variant="outline" className='mt-2'>
                        <FaGoogle className="mr-2 h-4 w-4 text-green"  /> Login with Google
                    </Button>

                </div>


            </div>
        </div>

    )
}

export default Login