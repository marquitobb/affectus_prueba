/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Logindos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            password: ""
        }
        //clear all session 
        localStorage.clear();
    }
    
    handleEmail = event =>{
        this.setState({
            Email: event.target.value
        })
    }

    handlePass = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = async(evt) => {
        evt.preventDefault();
        console.log(`correo--> ${this.state.Email}`)
        console.log(`pass--> ${this.state.password}`)
    
        axios.post('https://affectuslive.herokuapp.com/user/login', {
            email: this.state.Email,
            pass: this.state.password
        })
        .then((response) => {
          console.log(response.data);
          const data = response.data
          console.log(data.status);
          if (parseInt(data.status) === 1) {
            //var encryptedId = CryptoJS.AES.encrypt(data.id, 'secret key 123');
            //const encryptedId = cryptr.encrypt(data.id);
            localStorage.setItem('mydata', data.id)
            this.props.history.push("/main");
            //console.log( localStorage.getItem('mydata'));
            //window.location='/main'; //rediect page with js vanilla
          }else{
            alert("usuario o contraseña incorrecta")
          }
        }, (error) => {
          console.log(error);
        });
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6" style={{backgroundColor: 'rgb(204, 202, 202)', boxShadow: '0 0px 10px 1px', borderRadius: '3px', marginTop: '6%', marginBottom: '5%'}}>
                    <center>
                    <br /><img src="/images/affectus_negro.png" width="100px" height="100px" />
                    <hr />
                    <h3>Iniciar sesión</h3>
                    <form onSubmit={this.handleSubmit}>
                        <hr width="60%" />
                        <label htmlFor="name" style={{marginTop: '1%'}}>Email</label><br />
                        <input 
                        type="email" 
                        style={{width: '55%', height: '100%', textIndent: '20px'}} 
                        value={this.state.Email}
                        onChange={this.handleEmail}
                        /><br />
                        <label htmlFor="username" style={{marginTop: '1%'}}>Contraseña</label><br />
                        <input 
                        type="password" 
                        style={{width: '55%', height: '110%', textIndent: '20px'}} 
                        value={this.state.password}
                        onChange={this.handlePass}
                        /><br />
                        <button style={{borderRadius: '3px', width: '35%', marginTop: '2%', height: '110%', color: 'white', backgroundColor: 'black', borderStyle: 'none'}}>Ingresar</button>
                    </form>
                    <hr style={{marginTop: '8%'}} />
                    <label>Si aun no tienes cuenta, <Link to="/register">Registrate!</Link></label>
                    </center>
                </div>
                <div className="col-md-3" />
                </div>
            </div>
        );
    }
}

export default Logindos