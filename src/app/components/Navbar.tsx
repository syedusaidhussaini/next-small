import Image from "next/image";
import logo from "@/app/Assets/logo.png"
import Link from "next/link";
export default function Navbar() {
  return (
    <>
    <div className="w-[1528px] h-[92px] py-4 px-[220px] bg-slate-900 flex justify-between items-center fixed top-0 left-0 right-0">
        <div className="w-[90px] h-[40px]">
        <Image src={logo} alt="Logo"/>
        </div>
        <div className="w-[737.5px] h-[60px] flex justify-between items-center">
          <div className="w-[549px] h-[23px]">
            <ul className="flex flex-row justify-between text-white font-semibold">
              <Link href= "./" className="hover:text-blue-700">Home</Link>
              <Link href= "./Contact" className="hover:text-blue-700">Contact</Link>
              <Link href= "./Service" className="hover:text-blue-700">Service</Link>
              <Link href= "./About" className="hover:text-blue-700">About</Link>
            </ul>
          </div>
          <div className="w-[126px] h-[60px] flex flex-row">
            <button className="px-10 py-4 rounded-lg bg-slate-500 mx-4 hover:bg-slate-300 ">Login</button>
            <button className="px-10 py-4 rounded-lg bg-slate-500 mx-4 hover:bg-slate-300">SignIn</button>
          </div>
        </div>

      </div>
      


    </>
  );
}
