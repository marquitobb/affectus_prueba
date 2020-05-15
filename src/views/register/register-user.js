import React from "react";
import axios from 'axios';

class RegisterUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            email: "",
            pass: "",
            nucontrol: 0,
            name: "",
            lastname: ""
        }
    }

    handleEmail = event => {
        this.setState({
          email: event.target.value
        })
    }
    
    handlePass = event => {
        this.setState({
          pass: event.target.value
        })
    }
    
    handleNucontrol = event => {
        this.setState({
          nucontrol: event.target.value
        })
    }

    handleName = event => {
        this.setState({
          name: event.target.value
        })
    }
    
    handleLastname = event => {
        this.setState({
          lastname: event.target.value
        })
    }

    handleSubmit = event => {
        axios.post('https://affectuslive.herokuapp.com/user/saveuser', {
            nucontrol: this.state.nucontrol,
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            pass: this.state.pass
        })
        .then((response) => {
            //alert(response.data);
            window.location='/';
            //this.props.history.push("/");
            this.setState({
                nucontrol:0,
                name:"",
                lastname:"",
                email:"",
                pass:""
            })
        }, (error) => {
            alert("Usuario invalido")
            console.log(error);
        });
        event.preventDefault()
    }
      
    render() {
        return (
            <div className="container">                        
                <div className="p-3 mb-2 bg-info text-white">
                    <h1>Registrate</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail4"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        required
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputPass">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="inputPass"
                        value={this.state.pass}
                        onChange={this.handlePass}
                        required
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nucontrol">N.Control</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        id="nucontrol" 
                        placeholder="" 
                        required
                        value={this.state.nucontrol}
                        onChange={this.handleNucontrol}                        
                        />
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Nombre</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputName"
                        value={this.state.name}
                        onChange={this.handleName}
                        required
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputApellido">Apellido</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputApellido"
                        value={this.state.lastname}
                        onChange={this.handleLastname}
                        required
                        />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
            </div>
        );
    }
}

export default RegisterUser