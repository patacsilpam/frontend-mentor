import { Link } from 'react-scroll';//use this when you need "scrollintoview" element
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-20 text-white'>
      <strong className='ml-5'>sunnyside</strong>
      <ul className='sm:flex hidden'>
        <li className='mx-5'>
          <Link to="/" className='cursor-pointer'>Home</Link>
        </li>
        <li className='mx-5'>
          <Link smooth to="about" className='cursor-pointer'>About</Link>
        </li>
        <li className='mx-5'>
          <Link smooth to="services" className='cursor-pointer'>Services</Link>
        </li>
        <li className='mx-5'>
          <Link smooth to="projects" className='cursor-pointer'>Projects</Link>
        </li>
        <li className='mx-5'>
          <Link smooth to="contact" className='cursor-pointer bg-white text-slate-900 px-5 py-2 rounded-full'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
