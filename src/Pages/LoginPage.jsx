import { MdEmail } from "react-icons/md";
import LoginImage from "../assets/LoginImagebg.jpg"
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";




const Login =()=>{


return(

<div className={`w-full h-screen flex items-center justify-center`}>
<div className="w-[50%] max-lg:w-[45%] h-full max-sm:hidden">
<img
className="w-full h-full object-cover"
src={LoginImage} alt="" />
</div>  
<div className="w-[50%] max-lg:w-[55%] h-screen flex flex-col items-center justify-center gap-6">
    <h1 className="text-3xl font-semibold">PopcornSpot</h1>
    <form action=""
    className="w-[350px] h-[400px] bg-gray-100 shadow-md shadow-gray-300 rounded-lg flex flex-col justify-center items-center gap-6">
        <h2 className="w-full text-xl font-semibold text-center mb-5">Welcome</h2>
      <div className="w-[90%] px-4 flex justify-center items-center bg-white rounded-lg gap-3">
        <MdEmail className="text-red-500 text-xl"/>
        <input 
        className="w-full h-12 outline-none text-lg"
        placeholder="Email"
        required
        type="text" />
      </div>


      <div className="w-[90%] px-4 flex justify-center items-center bg-white rounded-lg gap-3">
        <RiLockPasswordFill className="text-red-500 text-xl"/>
        <input 
        className="w-full h-12 outline-none text-lg"
        placeholder="Password"
        required
        type="password" />
      </div>

      <button
      className="w-[90%] h-12 text-lg font-semibold bg-orange-400 rounded-lg hover:bg-orange-500 ">
        Login
      </button>

      <Link 
      className=""
      to={"/resetpassword"}>
      <p className="block w-full text-right">Forgot Password</p>
      </Link>
    </form>
</div>    

</div>






)}

export default Login;