import Image from "next/image";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <section className="flex items-center justify-center w-full h-[800px] bg-blue-500">
    <div className="text-center w-full">

      <h1 className="mt-6 text-4xl font-bold text-gray-900">Welcome to Our Website</h1>
       <p className="mt-4 text-lg text-gray-600">Explore, learn, and grow with us.</p>
       <button className=" px-10 py-4 rounded-lg bg-slate-500 hover:bg-slate-50 font-bold mt-8">View Us</button>
    </div>
    </section>
    <Footer />
    </>
  );
}
