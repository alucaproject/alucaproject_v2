import "../styles/loader.css";
import { useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";

var textParent = {
    initial: {
        y: 0,
        opacity: 1,
    },
    animate: {
        y: 0,
        opacity: 0,
        transition: {
            delay:1.5,
            duration: 0.5,
            ease: [0.5, 1, 0.89, 1],

            staggerChildren: 0.04,
        }
    },
    exit: {
    }
}
var textChild = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.9],
        }
    },
    exit: {}
}

const Loader = ( {setLoading} ) => {
    
    useEffect( () => {
        const timer = setTimeout( () => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

    return(
        <>
            <div className="loader__wrapper">

                <AnimatePresence>
                <motion.div
                variants={textParent}
                initial="initial"
                animate="animate"
                exit="exit">
                    <div className="loader__item">
                        <motion.span style={{display: "inline-block"}} variants={textChild}>a</motion.span>
                    </div>

                    <div className="loader__item">
                        <motion.span style={{display: "inline-block"}} variants={textChild}>L</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>u</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>c</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>a</motion.span>
                    </div>

                    <div className="loader__item">
                        <motion.span style={{display: "inline-block"}} variants={textChild}>P</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>r</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>o</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>j</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>e</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>c</motion.span>
                        <motion.span style={{display: "inline-block"}} variants={textChild}>t</motion.span>
                    </div>
                </motion.div>
                </AnimatePresence>

            </div>
        </>
    );

};

export default Loader;
