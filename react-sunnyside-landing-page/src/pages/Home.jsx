import Navbar from '../components/Navbar';
import About from '../pages/About';
export const Home = () => {
  return (
    <>
      <div className="relative md:bg-[url('https://static.vecteezy.com/system/resources/previews/010/520/992/original/blue-orange-background-free-vector.jpg')] bg-[url('images/mobile/image-header.jpg')] bg-cover h-screen">
        <img src="https://static.vecteezy.com/system/resources/previews/010/520/992/original/blue-orange-background-free-vector.jpg"/>
        <Navbar/>
        <About/>
        <div>
          <div>
            <h1 className='text-white font-Fraunces text-3xl md:text-7xl text-center mt-32 '>WE ARE CREATIVES</h1>
          </div>
          <div className='mt-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3v100M3 95.484l15 15 15-15"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;
