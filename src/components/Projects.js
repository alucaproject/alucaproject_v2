import "../styles/projects.css";
import transition from "../transition";
import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

// components
import Accordion from "./Accordion";

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
    exit: {},
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
    exit: {},
}

// projects data 
const data = [
    {
        id: 0,
        label: "aLucaProject",
        renderContent: () => (
            <div className="content">
                <div>
                    <div className="section__subheader">THE BRIEF</div>
                    <p className="section__description">
                    My previous website was built in 
                    2018 and needed updated. 
                    </p>
                </div>
                <div>
                    <div className="section__subheader">PROCESS</div>
                    <p className="section__description">
                    In the new design, I wanted to challange myself not to use photos. 
                    I wanted the focus of the user to be on my designs, not photography. 
                    </p>
                </div>
                <div>
                    <div className="section__subheader">RESULTS</div>
                    <p className="section__description">
                    The result was a clean minimal design focused on typography and  
                    enhanced by motion design. 
                    </p>
                    <br />
                    <ul>
                        <li><a href="https://www.alucaproject.com"><i className="ri-arrow-right-line"></i>  www.aLucaProject.com</a></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        id: 1,
        label: "Instform Security Services",
        renderContent: () => (
            <div className="content">
                <div>
                    <div className="section__subheader">THE BRIEF</div>
                    <p className="section__description">                
                    Instform Security Solutions LLC needed a website to present
                    their services. However, this was more than a website, this was a 
                    branding project as the owner reached out to me in the early stages 
                    of starting this business.
                    </p>
                </div>
                <div>
                    <div className="section__subheader">PROCESS</div>
                    <p className="section__description">
                    The process was fun and exciting as I had lots of creative freedom to 
                    work on this project since it was in the early stages.
                    </p>
                    <br />
                    <p className="section__description">
                    It was my first time attempting to present a security brand. 
                    I had to research security companies and understand them better 
                    and also closely communicate with the owner and understand 
                    what they want.
                    </p>
                </div>
                <div>
                    <div className="section__subheader">RESULTS</div>
                    <p className="section__description">
                    In the end the objective was simple. Create a clean and professional 
                    look for the new brand to easily present their services to
                    potential clients. 
                    </p>
                    <br />
                    <p className="section__description">
                    Along the way, help the owner create his brand identity to stand 
                    out amongst everyone else. 
                    </p>
                    <br />
                    <ul>
                        <li><a href="https://www.instform.com"><i className="ri-arrow-right-line"></i>  www.instform.com</a></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        label: "Your website ...is next",
        renderContent: () => (
            <div className="content">
                <div>
                    <div className="section__subheader">NEED A WEBSITE?</div>
                    <p className="section__description">
                    Contact me at aLucaProject@gmail.com
                    </p>
                </div>
                <div>
                    <div className="section__subheader">PROCESS</div>
                    <p className="section__description">
                    I aim to deliver brand identity with my websites.
                    </p>
                </div>
                <div>
                    <div className="section__subheader">RESULTS</div>
                    <p className="section__description">
                    Make your brand stand out.
                    </p>
                    <br />
                    <ul>
                        <li><a href="mailto:alucaproject@gmail.com"><i className="ri-arrow-right-line"></i>  alucaproject@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        ),
    },
]

const Projects = () => {

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
        <div className="section__container projects__container" id="projects"> 

            <motion.div 
            ref={targetRef}
            variants={scrollEffect}
            initial="initial"
            animate="animate"
            className="section__header">
                <div style={{overflow:"hidden"}}>
                    <motion.span 
                    variants={scrollEffectChild}
                    style={{display: "inline-block"}}>
                    Click on project for case study drop down.
                    </motion.span>
                </div>
            </motion.div>
        
            <Accordion items={data} keepOthersOpen={true}/>
        
        </div>
    )
}

export default transition(Projects);