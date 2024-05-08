import {useEffect, useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';

// components
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";


function App() {

  // set loader true/false
  const [loading, setLoading] = useState(true);
  // add loading class to <body> id while loading is true
  useEffect( () => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  // get location for react-router-dom 
  const location = useLocation();

  return (
    <>
      {
        // if loading true = return Loader component
        // else loading false = return react fragment <>
        loading ? (
          
          <Loader setLoading={setLoading} />

        ) : (

          <>
            <Nav />
          
            {/* AnimatePresence for transition to work in sync with the routing */}
            <AnimatePresence mode="wait">
        
              <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage />} />
                <Route path={"/projects"} element={<ProjectsPage />} />
              </Routes>
          
            </AnimatePresence >
          </>

        )
      }
    </>
  );
}

export default App;
