import React from 'react'
import FormSaveFile from '../../components/form-savefile/form-savefile'

class SaveFile extends React.Component{
    constructor(props) {
        super(props);        
        if (localStorage.getItem('mydata')) {
            console.log("session activa");
        } else {
            window.location='/';
        }
        console.log(localStorage.getItem('mydata'));
    }
    

    render() {
        if (localStorage.getItem('mydata')) {
            return (
                <div>
                    <FormSaveFile />
                </div>
            );            
        }
    }
}

export default SaveFile