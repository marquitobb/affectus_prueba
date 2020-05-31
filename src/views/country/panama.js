import React from 'react'
import DowFile from '../../components/dowland-file/dowFile';
class Panama extends React.Component{
    render() {
        return (
            <div>
                <h1>Panama country</h1>
                <DowFile 
                pais="panama"
                />
            </div>
        );
    }
}

export default Panama