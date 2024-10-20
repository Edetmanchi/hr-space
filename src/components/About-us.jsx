export default function About() {
    return (
      <div >
        <div className="font-sans bg-gray-900 p-6">
          
          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white">About Us</h2>
            <p className="mt-4 text-lg text-white
            ">
              Discover the latest features, trends, and technology in human resource development and employee management.
            </p>
          </section>
  
          {/* Services Section */}
          <div className=" justify-around grid md:grid-cols-5 px-6 sm:grid-cols-2 gap-5">
            <div className=" justify-between items-center bg-[#87AFB1] py-3 px-2 mx-4 text-center rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">
                <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="5em"
                    width="5em"
                    className="mx-auto mb-2 text-stone-800"
                    >
                    <path d="M341.52 285.56c33.65 0 82.34-6.94 82.34-47 .22-6.74.86-1.82-20.88-96.24-4.62-19.15-8.68-27.84-42.31-44.65-26.09-13.34-82.92-35.37-99.73-35.37-15.66 0-20.2 20.17-38.87 20.17-18 0-31.31-15.06-48.12-15.06-16.14 0-26.66 11-34.78 33.62-27.5 77.55-26.28 74.27-26.12 78.27 0 24.8 97.64 106.11 228.47 106.11M429 254.84c4.65 22 4.65 24.35 4.65 27.25 0 37.66-42.33 58.56-98 58.56-125.74.08-235.91-73.65-235.91-122.33a49.55 49.55 0 014.06-19.72C58.56 200.86 0 208.93 0 260.63c0 84.67 200.63 189 359.49 189 121.79 0 152.51-55.08 152.51-98.58 0-34.21-29.59-73.05-82.93-96.24" />
                </svg>    
                <div className="">
                    <h3 className="text-3xl font-bold text-stone-800">Talent Acquisition</h3>
                    <p className="mt-4 text-stone-900">
                        Recruit the best talents with our streamlined services.
                    </p>
                    <button className="mt-6 bg-stone-800 text-white py-2 px-7 rounded hover:bg-stone-600">
                        Explore
                    </button>
                </div>
              
            </div>
            <div className=" justify-between items-center bg-[#87AFB1] py-3 px-2 mx-4 text-center rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">
 
                <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    height="5em"
                    width="5em"
                    className="mx-auto mb-2 text-stone-800"
                >
                    <path d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0zm-14.9 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2h39.5c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z" />
                </svg>
                <div className="">
                    <h3 className="text-3xl font-bold text-stone-800">HR Management</h3>
                    <p className="mt-4 text-stone-900">
                        We provide Vast options of HR solutions Tailored for your Organization
                    </p>
                    <button className="mt-6 bg-stone-800 text-white py-2 px-7 rounded hover:bg-stone-600">
                        Explore
                    </button>
                </div>
              
            </div>
            <div className=" justify-between items-center bg-[#87AFB1] py-3 px-2 mx-4 text-center rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">  
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="5em"
                    width="5em"
                    className="mx-auto mb-2 text-stone-800"
                    >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 11a5 5 0 015 5v6H7v-6a5 5 0 015-5zm-6.712 3.006a6.983 6.983 0 00-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 013.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0122 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 2a4 4 0 110 8 4 4 0 010-8z" />
                </svg>  
                <div className="">
                    <h3 className="text-3xl font-bold text-stone-800">Team Building</h3>
                    <p className="mt-4 text-stone-900">
                        We foster collaboration and unity by helping organizations build stronger, more cohesive teams..
                    </p>
                    <button className="mt-6 bg-stone-800 text-white py-2 px-7 rounded hover:bg-stone-600">
                        Explore
                    </button>
                </div>
              
            </div>
            <div className=" justify-between items-center bg-[#87AFB1] py-3 px-2 mx-4 text-center rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="5em"
                    width="5em"
                    className="mx-auto mb-2 text-stone-800"
                    >
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4zm4-5.95a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M2 1a2 2 0 00-2 2v9.5A1.5 1.5 0 001.5 14h.653a5.373 5.373 0 011.066-2H1V3a1 1 0 011-1h12a1 1 0 011 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 001.5-1.5V3a2 2 0 00-2-2H2z" />
                </svg> 
                <div className="">
                    <h3 className="text-3xl font-bold text-stone-800">Talent Acquisition</h3>
                    <p className="mt-4 text-stone-900">
                        We help businesses invest in their people through training programs that enhance skills, boost productivity, and foster professional growth
                    </p>
                    <button className="mt-6 bg-stone-800 text-white py-2 px-7 rounded hover:bg-stone-600">
                        Explore
                    </button>
                </div>
              
            </div>
            <div className=" justify-between items-center bg-[#87AFB1] py-3 px-2 mx-4 text-center rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">   
                <svg
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    height="5em"
                    width="5em"
                    className="mx-auto mb-2 text-stone-800"
                     >
                    <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1 12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1 5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9 4.5-4.9 7.8-10.6 9.9-16.5 19.4 13 45.8 10.3 62.1-7.5 17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm496-224v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128h-96zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" />
                </svg>
                <div className="">
                    <h3 className="text-3xl font-bold text-stone-800">HR Consulting</h3>
                    <p className="mt-4 text-stone-900">
                        We provide tailored strategies to optimize your workforce management
                    </p>
                    <button className="mt-6 bg-stone-800 text-white py-2 px-7 rounded hover:bg-stone-600">
                        Explore
                    </button>
                </div>
              
            </div>


           
          </div>
        </div>
      </div>
    );
  }
  