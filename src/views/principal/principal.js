import React from "react";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var CryptoJS = require("crypto-js");

class Principal extends React.Component{
    constructor(props) {
        super(props);
        const { id } = this.props.match.params 
        this.state = {
            idUser: id 
        }
        if (localStorage.getItem('mydata')) {
            console.log("session iniciada");
        } else {
            window.location='/notfound';
        }
        console.log(localStorage.getItem('mydata'));
    }
    
    /*componentDidMount(){
        //const decryptedId = cryptr.decrypt(id);
        var decryptedId = this.state.idUser.toString(CryptoJS.enc.Utf8);
        console.log(decryptedId) 
    }*/

    validar = () => {

    }
    

    render() {
        return (
            <div>
                <h1>Principal page</h1>
            </div>
        );
    }
}

export default Principal