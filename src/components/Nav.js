import "../styles/nav.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';

import {motion, AnimatePresence} from "framer-motion";

// Framer-motion variants
const topNavDrop = {
    initial: {
        x: "-50%", /* framer breaks 'transform: translateX(-50%)' in css for nav so I re-add rule here.  */
        y: -300,
    },
    animate: {
        x: "-50%", /* framer breaks 'transform: translateX(-50%)' in css for nav so I re-add rule here.  */
        y: 0,
        transition: {
            delay: 0.23,
            duration: 1.7,
            ease: [0.6, 0.01, -0.05, 0.9],
        }
    },
    exit: {}
}
const menuVars = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease:[0.12, 0, 0.39, 0],
        } 
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease:[0.12, 0, 0.39, 0],
        }
    }
}
const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        }
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        }
    },
    exit: {}
}


const Nav = () => {

    const [open, setOpen] = useState(false);
    // open/close nav__links
    const toggleMenuHandler = (e) => {
        if(window.innerWidth < 768){
            setOpen( !open );
        }
    };
    // screen resize handler function
    const screenResizeHandler = (e) => {
        if(window.innerWidth > 768){
            setOpen(false); // true if used in desktop view
        }else{
            setOpen(false);
        }
    };
    // add event listener for screen resize
    useEffect( () => {
        window.addEventListener('resize', screenResizeHandler);
        return () => window.removeEventListener('resize', screenResizeHandler);
    }, [screenResizeHandler]);
    // check viewport screen size
    useEffect( () => {
        if(window.innerWidth > 768){
            setOpen(false); // true if used in desktop view
        }else{
            setOpen(false);
        }
    }, []);

    return (
        <>


        <motion.nav 
            variants={topNavDrop}
            initial="initial"
            animate="animate"
            exit="exit"
        >

            <div className="nav__header">
                <div className="nav__logo">
                    <Link className="" to="/">a Luca Project</Link>
                </div>
                <div 
                    className="nav__menu__btn" 
                    id="nav-btn"
                    onClick={toggleMenuHandler}    
                >
                    { 
                        !open ? <span className="app__link">menu</span>  
                        : <span className="app__link">close</span>}
                </div>
            </div>

            {/* 
            
                mobile viewport was nested here inside <nav>
                but to prevent "mix-blend-mode" from making the 
                mobile menu see through I just moved it out below the <nav>
                and switched the position for ".nav_links_wrapper"
                to fixed from absolute.         
                        
            */}

            {/* desktop viewport */}
            <ul className="nav__links__desktop" id="nav-links">
                <li>
                    <Link className="app__link" to="/#home">Home</Link>
                </li>
                <li>
                    <Link className="app__link" to="/#about">About</Link>
                </li>
                <li>
                    <Link className="app__link" to="/projects#projects">Projects</Link>
                </li>
            </ul>


            <div className="nav__btns">
                <Link className="app__link__inverted" to="mailto:alucaproject@gmail.com">alucaproject@gmail.com</Link>
            </div>

        </motion.nav>

        <AnimatePresence>
        {   
            /* mobile viewport */
            open&&
            <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{transformOrigin: "top"}}
            className="nav__links__wrapper">
                <motion.ul 
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="nav__links__mobile" id="nav-links">
                    <li style={{overflow: "hidden"}}>
                        <MobileNavLinks clickedLinkHandler={toggleMenuHandler} to="/#home" title="Home" />
                    </li>
                    <li style={{overflow: "hidden"}}>
                        <MobileNavLinks clickedLinkHandler={toggleMenuHandler} to="/#about" title="About" />
                    </li>
                    <li style={{overflow: "hidden"}}>
                        <MobileNavLinks clickedLinkHandler={toggleMenuHandler} to="/projects#projects" title="Projects" />
                    </li>
                </motion.ul>
                <ul className="nav__links__mobile">
                    <li><a  href="https://instagram.com/alucaproject"><i className="ri-instagram-line"></i> Instagram</a></li>
                </ul>
            </motion.div>
        }    
        </AnimatePresence>       

        </>
    )
}

export default Nav;

const MobileNavLinks = ({clickedLinkHandler, to, title}) => {

    // Framer-motion variants
    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1]
            }
        },
        exit: {},
    }
    return (
        <motion.div
        variants={mobileLinkVars}
        >
            <Link className="app__link" onClick={clickedLinkHandler} to={to}>{title}</Link>
        </motion.div>
    )

}