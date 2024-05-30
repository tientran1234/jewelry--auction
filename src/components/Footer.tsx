import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";


const Footer = () => {
  return (
    <div className="grid grid-cols-custom bg-zinc-100 p-20">
        <div >
            <h1 className="text-3xl m-4">About Us</h1>
            <p className="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusamus ipsum nulla officiis explicabo labore non nesciunt optio iste! Molestiae aliquam maiores rerum suscipit ut voluptate veniam tempora, nulla quisquam?</p>
            <div className="flex justify-around m-4 ">
            <FaFacebook className="text-blue text-3xl " />
            <AiFillInstagram className="text-red text-3xl" />
            <LuTwitter  className="text-blue text-3xl"/>
            </div>
            
        </div>
        <div>
        <h1 className="text-3xl m-4">Discover</h1>
        <p  className="m-4">Buy & Sell</p>
        <p  className="m-4">Merchant</p>
        <p  className="m-4">Giving Back</p>
        <p  className="m-4">Help & Support</p>
        </div>

        <div>
        <h1 className="text-3xl m-4">About</h1>
        <p  className="m-4">Staff</p>
        <p  className="m-4">Team</p>
        <p  className="m-4">Carreers</p>
        <p  className="m-4">Blog</p>
        </div>

        <div>
        <h1 className="text-3xl m-4">Resources</h1>
        <p  className="m-4">Security</p>
        <p  className="m-4">Global</p>
        <p  className="m-4">Charts</p>
        <p  className="m-4">Privacy</p>
        </div>
    </div>
  )
}

export default Footer