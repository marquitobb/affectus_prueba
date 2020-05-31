/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Colima from "../country/colima";
import Eua from "../country/eua";
import France from "../country/france";
import Italy from "../country/italy";
import Mexico from "../country/mexico";
import Panama from "../country/panama";
import Spain from "../country/spain";
//import { Link } from "react-router-dom";
import FormSaveFile from '../../components/form-savefile/form-savefile'
//using axios
import axios from 'axios';

class Principal extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            idUser: localStorage.getItem('mydata'),
            count: 'principal',
            isAdmin: false
        }
        //get info about user
        if (localStorage.getItem('mydata')) {
          console.log("session iniciada");
        } else {          
          window.location='/';
        }
        console.log(localStorage.getItem('mydata'));
    }
    
    componentDidMount(){
      axios.post('http://localhost:4000/user/rol', {
        id: this.state.idUser
      })
      .then((response) => {        
        const data = response.data
        console.log(data.rol);
        var rol = data.rol
        if (rol === 'admin') {
          this.admin()
        }
      }, (error) => {
        console.log(error);
      });
    }

    actState = async(status) => {
      await this.setState({
        count: status
      })
    }

    admin = async() =>{
      await this.setState({
        isAdmin: true
      })
    }

    IsAdmin = () =>{
      const admin = this.state.isAdmin
      if (admin) {
        return <a className="nav-link" onClick={() => this.actState('savefile')} href="#">subir archivo</a>                      
      }else{
        return null
      } 
    }
    

    render() {
        if (this.state.idUser) {
            return (
              <div>                
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(204, 202, 202)', color: 'black'}}>
                  <div className="container">
                    <a className="navbar-brand" href="#"><img src="/images/affectus_negro.png" width="45px" height="45px" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">¿Quienes somos?</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Paises
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" onClick={() => this.actState('italy')} href="#">Italia</a>
                            <a className="dropdown-item" onClick={() => this.actState('spain')} href="#">España</a>
                            <a className="dropdown-item" onClick={() => this.actState('france')} href="#">Francia</a>
                            <a className="dropdown-item" onClick={() => this.actState('eua')} href="#">EUA</a>
                            <a className="dropdown-item" onClick={() => this.actState('mexico')} href="#">Mexico</a>
                            <a className="dropdown-item" onClick={() => this.actState('panama')} href="#">Panamá</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item"onClick={() => this.actState('colima')} href="#">Colima</a>
                          </div>
                        </li>
                      </ul>                      

                      {
                        this.IsAdmin()
                      }                      

                      <form className="form-inline my-2 my-lg-0">
                        <a className="nav-link" href="/">Cerrar sesión</a>
                      </form>
                    </div>
                  </div>
                </nav>
                <div className="container">
                  <Country 
                  pais={this.state.count}
                  />
                </div>

              </div>
            );
        }
    }
}


function Country(props) {
  let status = props.pais
  switch (status) {
    case 'colima':
      return <Colima />;
    case 'eua':
      return <Eua />;
    case 'france':
      return <France />;
    case 'italy':
      return <Italy />;
    case 'mexico':
      return <Mexico />;
    case 'panama':
      return <Panama />;
    case 'spain':
      return <Spain />;
    case 'savefile':
      return <FormSaveFile />;
    default:
      return <h1>Welcome</h1>;
  }
}



export default Principal