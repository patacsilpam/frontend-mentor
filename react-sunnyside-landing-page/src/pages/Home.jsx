import Navbar from '../components/Navbar';
import About from '../pages/About';
export const Home = () => {
  return (
    <>
      <div className="lg:bg-[url('images/desktop/image-header.jpg')] bg-[url('images/mobile/image-header.jpg')] bg-cover h-screen">
        <Navbar/>
        <About/>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 3v100M3 95.484l15 15 15-15"/>
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}
export default Home;