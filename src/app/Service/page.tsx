import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Service() {
  return (
    <>
      <Navbar />
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nihil deleniti natus, ipsum ad quam temporibus consequatur itaque provident incidunt illum, impedit magni architecto reprehenderit nemo! Totam   */}
      <h1 className="font-bold text-4xl mt-[120px] text-black justify-center items-center ml-[650px]">Our Services</h1>
      <div className="w-full h-[700px] mx-6 px-6 py-12 mt-20 flex justify-center items-center gap-6">
        
        {/* <!-- Web Development Service --> */}
        <section className="rounded-xl w-[400px] h-[500px] p-6 bg-gray-300 text-center ml-10 text-black ">
          <h3 className="text-4xl font-bold text-gray-800 mt-8">Web Development</h3>
          <p className="mt-10 text-lg text-black ml-2 ">
            Our web development services focus on creating responsive, user-friendly websites that help you grow your online presence. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to bring your vision to life with modern technologies like React, Next.js, and Tailwind CSS.
          </p>
        </section>

        {/* <!-- Mobile App Development Service --> */}
        <section className="rounded-xl w-[400px] h-[500px] p-6 bg-gray-300 text-center ml-20">
          <h3 className="text-4xl font-bold text-gray-800 mt-10">Mobile App Development</h3>
          <p className="mt-10 text-lg text-black ml-2 ">
            We create mobile applications that deliver seamless experiences on both Android and iOS platforms. Our team focuses on user-centric design and high-performance development, ensuring your app stands out in the market while meeting your business objectives.
          </p>
        </section>

        {/* <!-- Digital Marketing Service --> */}
        <section className="rounded-xl w-[400px] h-[500px] p-6 bg-gray-300 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mt-10">Digital Marketing</h3>
          <p className="mt-10 text-lg text-black ml-2 ">
            Our digital marketing services help businesses reach their target audience through strategic online campaigns. From SEO optimization to social media management and paid ads, we drive traffic, increase conversions, and grow your brand's online presence.
          </p>
        </section>

      </div>
      <Footer />
    </>
  )
}
