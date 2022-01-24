import React,{useState} from "react";
import Link from 'next/link'
import Head from 'next/head'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    const Navigationfunc = () => {
        setIsOpen(!isOpen)
    }
    return (
        <React.Fragment>
            <Head>
                <title>Jeff Bermejo | Front-end Developer</title>
            </Head>
            <header className="header container">
                <div className="header__wrapper">
                <i className='bx bx-menu' onClick={Navigationfunc}></i>
                    <div className="header__title">
                        <Link href="/" passHref={true} ><h2>JEFF</h2></Link>
                    </div>
                    <ul className="nav__menu" style={{display: isOpen ? "flex" : ""}}>
                        <li onClick={Navigationfunc}>
                            <Link href="/project" >Projects</Link>
                        </li>
                        <li onClick={Navigationfunc}>
                            <Link href="/about" onClick={Navigationfunc}>About & Skill</Link>
                        </li>
                    </ul>
                </div>
                <div className="header__social">
                <Link href="https://github.com/jef-design" passHref={true}><i className='bx bxl-github'></i></Link>
                <Link href="https://www.linkedin.com/in/jeff-bermejo-b14288217/" passHref={true}><i className='bx bxl-linkedin' ></i></Link>
                </div>
                
            </header>
        </React.Fragment>
    );
};

export default Header;
