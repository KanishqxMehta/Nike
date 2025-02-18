import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants';

const Nav = () => {
  return <div>
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between align-center max-container'>
            <a href="/">
            <img 
            src={headerLogo} 
            alt="logo"
            width={130}
            height={29}
            />
            {/* <img src={hamburger} alt="menu" className='h-8'/> */}
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <ul key={item.label}>
                        <a 
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            <li >{item.label}</li>
                        </a>
                    </ul>
                ))}
            </ul>

            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="menu" height={25} width={25}/>
            </div>
             
        </nav>
    </header>
  </div>;
};

export default Nav;
