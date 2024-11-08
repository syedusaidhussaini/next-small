import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"

import Navbar from "../components/Navbar";

export default function About() {
  return ( 
    <>
    <Navbar />
        {/* <Navbar /> */}
    <div>
        <section className="flex items-center justify-center w-full h-[800px] bg-amber-200">
         <div className="text-center w-full">

         <h1 className="text-4xl font-bold text-red-800 mt-10">Our Mission & Responsibilities</h1>

         <p className="mt-4 text-lg text-black">
  Our mission is to empower businesses through cutting-edge technology and exceptional service. We aim to bridge the gap between innovation and real-world impact, helping our clients achieve sustainable success while fostering a culture of excellence.
</p>

            <button className=" px-10 py-4 rounded-lg bg-slate-500 hover:bg-slate-50 font-bold mt-8">View Us</button>
          </div>
       </section>
    </div>
<Footer />
    </>
  )
}



