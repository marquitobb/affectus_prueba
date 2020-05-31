import React from 'react'
import DowFile from '../../components/dowland-file/dowFile';

class Colima extends React.Component{    
    render() {
        return (
            <div>
                <h1>Colima state</h1>
                <DowFile 
                pais="colima"
                />
            </div>
        );
    }
}

export default Colima