import "../styles/accordion.css";
import {useEffect, useState} from 'react';


const Accordion = ({items, keepOthersOpen}) => {

    const [accordionItems, setAccordionItems ] = useState(null);

    useEffect(() => {
         
        if(items){
            setAccordionItems([
                ...items.map( item => ({
                    ...item, /* spreads the id, label, renderContent() */
                    toggled: false /* adds another value to id, label, renderContent(), toggeled */

                }))
            ])
        }
    
    },[items])

    function handleAccordionToggle(clickedItem) {
        setAccordionItems( [
            ...accordionItems.map( (item) => {
                let toggled = item.toggled;

                if (clickedItem.id === item.id) {
                    toggled = !item.toggled
                } else if(!keepOthersOpen) {
                    toggled = false; 
                } 

                return {
                    ...item,
                    toggled
                }
                
            })            
        ])
    }

    return (
        <div className="accordion-parent">
            { 
                accordionItems?.map( (listItem, key) => {
                    
                    return (
                        <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
                            <button className="toggle" onClick={ () => handleAccordionToggle(listItem) }>
                                <div >{`${listItem.label}`}</div>
                                <div className="direction-indicator">{ listItem.toggled ? '-' : '+' }</div>
                            </button>
                            <div className="content-parent">
                                <div className="content-wrapper">{listItem.renderContent()}</div>
                            </div>
                        </div>
                    )

                }) 
            }

        </div>
    )
}

export default Accordion;