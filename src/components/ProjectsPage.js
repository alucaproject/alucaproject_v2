import transition from "../transition";

// components 
import Projects from "./Projects";
import Footer from "./Footer";
import ScrollToHashElement from "./ScrollToHashElement";

const ProjectsPage = () => {
    return (
        <>
            <Projects />

            <Footer />

            {/* ScrollToHashElement makes react-router-dom scroll to #hash anchor sections */}
            <ScrollToHashElement />
        </>
    )
}

export default transition(ProjectsPage);