import React from "react";

class Principal extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            idUser: localStorage.getItem('mydata')
        }
        if (localStorage.getItem('mydata')) {
            console.log("session iniciada");
        } else {
            window.location='/';
        }
        console.log(localStorage.getItem('mydata'));
    }
    
    componentDidMount(){
        //clear all session 
        localStorage.clear();
    }

    validar = () => {

    }
    

    render() {
        if (this.state.idUser) {
            return (
                <div>
                    <h1>Principal page</h1>
                </div>
            );
        }
    }
}

export default Principal