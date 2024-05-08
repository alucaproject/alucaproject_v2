import transition from "../transition";

// components
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import ScrollToHashElement from "./ScrollToHashElement";

const HomePage = () => {
    return (
        <>
            <Header />

            <About />

            <Footer />

            {/* ScrollToHashElement makes react-router-dom scroll to #hash anchor sections */}
            <ScrollToHashElement />
        </>
    )
}

export default transition(HomePage);