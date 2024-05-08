import "../styles/about.css";
import transition from "../transition";
import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

// framer variants 

const scrollEffect = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delayChildren: -0.2,
            staggerChildren: 0.2,
        }
    },
    exit: {
    },
}

const scrollEffectChild = {
    initial: {
        y: 200,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.6, 0.01, -0.05, 0.9],
        }
    },
    exit: {
    },
}

const About = () => {

    const targetRef = useRef(null);
    const control = useAnimation();
    const isInView = useInView(targetRef);

    useEffect( () => {
        if(isInView){
            control.start("animate");
        }else{
            control.start("initial");
        }
    }, [isInView]);

    return (
        <div className="section__container about__container" id="about">
            
            <motion.div 
            ref={targetRef}
            variants={scrollEffect}
            initial="initial"
            animate={control}
            exit="exit"
            className="section__header">

                <div style={{overflow:"hidden"}}>
                    <motion.span 
                    variants={scrollEffectChild}
                    style={{display: "inline-block"}}>
                    I’m a front-end developer focused on  
                    </motion.span>
                </div>
                <div style={{overflow:"hidden"}}>
                    <motion.span 
                    variants={scrollEffectChild}
                    style={{display: "inline-block"}}>
                    crafting modern designs and engaging user  
                    </motion.span>
                </div>
                <div style={{overflow:"hidden"}}>
                    <motion.span 
                    variants={scrollEffectChild}
                    style={{display: "inline-block"}}>
                    experiences to create visually stunning websites. 
                    </motion.span>
                </div>

            </motion.div>
            
            
            <div className="section__description">
                <p>
                    My mission is to deliver more than just a website, 
                    I aim to provide a full brand experience! I pour 
                    my dedication into crafting authentic websites that 
                    are tailor-made for each business I work with. By 
                    understanding the essence of a business and its unique 
                    identity, I create websites that not only showcase its 
                    offerings but also resonate with its audience on a 
                    deeper level. Through attention to detail 
                    and a commitment to excellence, I ensure that every 
                    website I deliver not only meets but exceeds 
                    expectations, leaving a lasting impression and 
                    contributing to the success of the brand.
                </p>
                <p>
                    It’s important to highlight the foundation upon which 
                    my services are built. I have been deeply passionate 
                    about web development for over a decade, my fascination 
                    started before 2007. Witnessing the art of 
                    web development evolve over the years fueled my enthusiasm 
                    further. My journey has led me to explore a diverse 
                    array of programming languages, including JavaScript, 
                    PHP, Ruby, and Java during my academic pursuit. Each 
                    language I've encountered has added a new layer of depth 
                    to my understanding, enriching my development journey and 
                    empowering me to create more dynamic and impactful web 
                    experiences.
                </p>
                <p>
                    Moreover, I have experience with graphic design software, 
                    which I've used to craft logos and graphics. These 
                    creative abilities complement the foundation to my 
                    technical skills, enriching my capability to create truly 
                    authentic websites.
                </p>
            </div>
        
        </div>
    )
}

export default transition(About);
