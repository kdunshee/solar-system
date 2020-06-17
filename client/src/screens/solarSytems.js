import React, {useEffect} from 'react'

const SolarSystems = (props) => {

    useEffect(()=> {
        console.log("mounted");

    }, []);
    
    
    return (
        <div>
            <h1>Solar System</h1>
        </div>
    );
};

export default SolarSystems;