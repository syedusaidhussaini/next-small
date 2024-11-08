import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
    <Navbar />
    <section className="flex items-center justify-center w-full h-[800px]">
    <div className="text-center w-full">

      <h1 className="mt-6 text-4xl font-bold text-gray-900">CONTACT WITH US</h1>
       <p className="mt-4 text-lg text-gray-600"> We’d love to hear from you! Whether you have questions, feedback, or simply want to reach out, feel free to get in touch. Our team is here to help.</p>
       
       <br></br>
       <h1 className="mt-6 text-4xl font-bold"> Now click the below button to visit our websites.</h1>
       <button className=" px-10 py-4 rounded-lg bg-slate-500 hover:bg-slate-50 font-bold mt-8">View Us</button>
    </div>
    </section>
<Footer />
    </>
  )
}