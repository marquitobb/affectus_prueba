/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import axios from 'axios';
//const FileDownload = require('js-file-download');

class DeleteFile extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            pais: 'colima',
            selectFile: '',
            nameFile: [],            
        }
    }

    componentDidMount(){
        this.viewfiles()
    }
    
    viewfiles = async() =>{
        try {
            const url = `https://affectuslive.herokuapp.com/savefile/viewfiles?country=${this.state.pais}`
            let res = await fetch(url)
            let data = await res.json()
            
            await this.setState({
                nameFile: data
            })    
            console.log(this.state.nameFile);                 
        } catch (error) {
            console.log(error);
        }
    }
    
    delete = () =>{
        console.log("se elimino file");        
    }

    dowlandFile = (archivo) => {
        try {
            const url = `https://affectuslive.herokuapp.com/savefile/download?pais=${this.state.pais}&filename=${archivo}`
            window.open(`${url}`)
        } catch (error) {
            console.log(error);
        }
    }

    handleRuta = async (event) =>{
        await this.setState({
            pais: event.target.value
        })  
        console.log(this.state.ruta);
        this.viewfiles()
    }

    render() {
        return (
            <div>
                <label>selecciona el estado</label>
                <select value={this.state.pais} onChange={this.handleRuta}>
                    <option value="colima">Colima</option>
                    <option value="italia">Italia</option>
                    <option value="spain">España</option>
                    <option value="france">Francia</option>
                    <option value="eua">EUA</option>
                    <option value="mexico">Mexico</option>
                    <option value="panama">Panama</option>
                </select>            
                {
                    this.state.nameFile.map((i,index)=>{
                        return(
                            <div className="card w-50" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">archivo de {this.state.pais}</h5>
                                    <a href='#' onClick={() => this.dowlandFile(i)} className="card-text">{i}</a>
                                    <br></br>
                                    <br></br>
                                    <a href="#" onClick={() => this.delete(i)} className="btn btn-danger">Eliminar</a>
                                </div>
                            </div>                            
                        )
                    })
                }                
            </div>
        );
    }
}

export default DeleteFile
