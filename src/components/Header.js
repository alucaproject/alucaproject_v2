import "../styles/header.css";

import {motion} from "framer-motion";

// framer variants 
const parentText = {
    initial: {
    },
    animate: {
        transition: {
            delayChildren: -0.17,
            staggerChildren: 0.2,
        }
    },
    exit: {}
}
const childText = {
    initial: {
        y: 150,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.6, 0.01, -0.05, 0.9],
        }
    },
    exit: {},
}
const childTextTwo = {
    initial: {
        y: 200,
    },
    animate: {
        y: 0,
        transition: {
            delay: 0.1,
            duration: 1.7,
            ease: [0.6, 0.01, -0.05, 0.9],
        }
    },
    exit: {},
}

const Header = () => {

    const todayDate = new Date();

    return (
        <header>
            <div className="section__container header__container" id="home">

                <motion.div 
                variants={parentText}
                initial="initial"
                animate="animate"
                exit="exit"
                className="hero__area">
                    <div style={{overflow: "hidden", width: "100%"}}>
                        <motion.h2 
                        variants={childText}
                        className="hero__title">CREATIVE</motion.h2>
                    </div>
                    <div style={{overflow: "hidden", width: "100%"}}>
                        <motion.h2 
                        variants={childText}
                        className="hero__title hero__title__second__line">DEVELOPER</motion.h2>
                    </div>
                    <div style={{overflow: "hidden", width: "100%"}}>
                        <motion.p 
                        variants={childTextTwo}
                        className="section__subheader">Book projects from {todayDate.getMonth() + 3}/{todayDate.getUTCFullYear()}</motion.p>
                    </div>
                </motion.div>

            </div>
        </header>
    )
}

export default Header;