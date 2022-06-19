import React from 'react'; 
import HogDetails from './HogsDetail';
import hogs from '../porkers_data';


function Hogs(){
    return(
        <div className="ui grid container">
            {hogs.map(hog => <HogDetails key={hog.name} hog={hog}/>)}
        </div>

    )

}

export default Hogs;