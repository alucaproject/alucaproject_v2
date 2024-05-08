import "../styles/about.css";
import transition from "../transition";


const About = () => {

    return (
        <div className="section__container about__container" id="about">
            
            <div className="section__header">
                I’m a front-end developer focused on crafting modern 
                designs and engaging user experiences to create visually 
                stunning websites. 
            </div>
            
            
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
