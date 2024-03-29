import Navbar from '../components/Navbar';
import About from '../pages/About';
export const Home = () => {
  return (
    <>
      <div className="relative md:bg-[url('/images/desktop/image-header.jpg')] bg-[url('/images/mobile/image-header.jpg')] bg-cover h-screen">
        <Navbar/>
        <About/>
        {/*We are Creatives */}
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
      {/*Second Section*/}
      <div>
        {/*Transform your brand */}
        <div className='grid md:grid-cols-2'>
          <div className='bg-white flex flex-col justify-center p-10 md:p-24 order-1 md:-order-1'>
            <h1 className='font-Fraunces text-5xl'>Transform your brand</h1>
            <p className='my-10'>We are a full-service creative agency specializing in helping brands grow fast. 
              Engage your clients through compelling visuals that do most of marketing for you.
            </p>
            <strong><u className='decoration-4 decoration-yellow-400'>Learn More</u></strong>
          </div> 
          <img src="images/desktop/image-transform.jpg" alt="image-transform" className='w-screen' />
        </div>
        {/*Stand out to right audience*/}
        <div className='grid md:grid-cols-2'>
          <div className='bg-white flex flex-col justify-center p-10 md:p-24 order-2 md:order-1'>
            <h1 className='font-Fraunces text-5xl'>Stand out to right audience</h1>
            <p className='my-10'>
              Using a collaborative formula of designers, reasearchers, photographers, videographers and copywriters,
              we'll build and extend your brand in digital places.
            </p>
            <strong><u className='decoration-4 decoration-yellow-400'>Learn More</u></strong>
          </div> 
            <img src="images/desktop/image-stand-out.jpg" alt="image-transform" className='w-screen' />
          </div>
          {/*GRAPHIC DESIGN */}
        <div className='grid md:grid-cols-2 '>
          <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] md:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-cover relative h-screen text-center">
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8 mt-5'>
              <h1 className='font-Fraunces text-3xl text-emerald-900'>Graphic Design</h1>
              <p className='md:my-5 text-emerald-900 font-semibold'>
                Great design makes you memorable. We deliver artwork that underscores your brand message
                and captures potential client's attention.
              </p>
            </div>
          </div>
          <div className="bg-[url('/images/mobile/image-photography.jpg')] md:bg-[url('/images/desktop/image-photography.jpg')]  bg-cover relative h-screen text-center">
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8 mt-5'>
              <h1 className='font-Fraunces text-3xl text-cyan-900'>Photography</h1>
              <p className='md:my-5 text-cyan-900 font-semibold'>
                Increase your credebility by getting the most stunning, 
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
        {/*Client Testimonials*/}
          <div className='h-screen grid place-content-center text-center'>
            <div className='p-4 mb-5'>
              <strong className='font-Fraunces text-gray-600 text-3xl'>CLIENT TESTIMONIALS</strong>
            </div>
            <div className='flex flex-row p-10'>
              {/*CARD 1*/}
            <div>
              <figure className=''>
                <img src="/images/image-emily.jpg" className='w-10' alt="Emily" />
                <figcaption className='w-96'>
                  We put our trust in SunnySide and they delivered, 
                  making sure our needs were met, and deadlines were always hit.
                </figcaption>
                <strong className='font-Fraunces'>Emily R.</strong>
                <small>Markekting Director</small>
              </figure>
            </div>
            {/*CARD 2*/}
            <div className='px-10'>
              <figure className=''>
                <img src="/images/image-thomas.jpg" className='w-10' alt="Emily" />
                <figcaption className='w-96'>
                  Sunnyside's enthusiasm coupled with their keen interest
                  in our brand's success made it a satisfying and enjoyable experience.
                </figcaption>
                <strong className='font-Fraunces'>Thomas S.</strong>
                <small>Chief Operating Officer</small>
              </figure>
            </div>
            {/*CARD 3*/}
            <div>
              <figure className=''>
                <img src="/images/image-jennie.jpg" className='w-10' alt="Emily" />
                <figcaption className='w-96'>
                  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended@
                </figcaption>
                <strong className='font-Fraunces'>Jennie F</strong>
                <small>Business Officer</small>
              </figure>
            </div>
            </div>
          </div>
        </div> 
        {/* */}
    </>
  )
}
export default Home;
 
