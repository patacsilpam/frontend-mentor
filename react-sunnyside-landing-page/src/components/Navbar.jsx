import { useState } from 'react';
import { Link } from 'react-scroll';//use this when you need "scrollintoview" element
const Navbar = () => {
  const [isOpen,setOpen] = useState(true);
  const menuToggle = () => {
    setOpen(!isOpen);
  }
  return (
    <nav className='flex justify-between items-center h-20 '>
      <strong className='ml-5 text-white md:text-2xl font-Fraunces'>sunnyside</strong>
      <ul className={`${isOpen ? 'hidden' : 'flex flex-col mt-[300px] bg-white w-screen text-center p-4 z-10'} font-Barlow md:flex md:flex-row md:text-white`}>
        <li className='mx-5 my-2 md:my-0'> 
          <Link to="/" className='cursor-pointer'>Home</Link>
        </li>
        <li className='mx-5 my-2 md:my-0'>
          <Link smooth to="about" className='cursor-pointer'>About</Link>
        </li>
        <li className='mx-5 my-2 md:my-0'>
          <Link smooth to="services" className='cursor-pointer'>Services</Link>
        </li>
        <li className='mx-5 my-2 md:my-0'>
          <Link smooth to="projects" className='cursor-pointer'>Projects</Link>
        </li>
        <li className='mx-5 my-2 md:my-0'>
          <Link smooth to="contact" className="cursor-pointer bg-yellow-400 md:bg-white text-slate-900 font-Fraunces px-5 py-2 rounded-full">Contact</Link>
        </li>
      </ul>
      <div className="md:hidden flex flex-col mx-5" onClick={menuToggle}>
        <div className='bg-white h-1 w-10 rounded-sm'></div>
        <div className='bg-white h-1 w-10 rounded-sm my-2'></div>
        <div className='bg-white h-1 w-10 rounded-sm'></div>
      </div>
    </nav>
  );
}

export default Navbar;
