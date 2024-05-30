
import { IoHome } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 ">
      <div className="flex justify-around  w-[25rem] ">
        <IoHome className="text-2xl" />
        <h1>AUCTION</h1>
        <h1>SELLING</h1>
      </div>
        
        <img src="/image.png" className="rounded-[100%] w-1/12 " alt="" />
        <div className="flex justify-around w-96 ">
        <h1>CONTACT</h1>
        <h1>POLICIES</h1>
        <div className="flex justify-around w-48  ">
        <FaRegHeart className="text-2xl"  />
        <LuBellRing className="text-2xl" />
        <FaRegUser className="text-2xl" />
        </div>
        </div>
    </div>
  )
}

export default Header