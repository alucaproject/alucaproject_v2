
import {useLocation} from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollToHashElement = () => {

    /*
    original repo for this component: 
    https://github.com/ncoughlin/scroll-to-hash-element/blob/main/ScrollToHashElement.js
    */

    const location = useLocation();
    
    useLayoutEffect( () => {
        
        const {hash} = location;

        const removeHashCharacter = (str) => {
            const result = str.slice(1);
            return result;
        }

        if(hash) {
            const element = document.getElementById( removeHashCharacter(hash) );

            if(element) {
                element.scrollIntoView();
            }
        }

    },[location]);

    return null;

};

export default ScrollToHashElement;