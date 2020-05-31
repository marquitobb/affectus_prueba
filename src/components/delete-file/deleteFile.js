/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import axios from 'axios';
//const FileDownload = require('js-file-download');

class DeleteFile extends React.Component{
    constructor(props) {
        super(props);               
        this.state = { 
            band: true,           
            selectFile: '',
            nameFile: [], 
            pais:'colima'        
        }
        this.viewfiles()
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log("props ruta-->",props.ruta);        
        return {
            pais: props.ruta
        }        
    }

    componentDidUpdate(prevProps){
        if ( prevProps.ruta !== this.state.pais ) {
          this.viewfiles(); //example calling redux action
        }
      }

    
    viewfiles = async() =>{
        try {
            //const url = `https://affectuslive.herokuapp.com/savefile/viewfiles?country=${this.state.pais}`
            console.log("pais-->",this.state.pais);            
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

        if (this.state.band) {
            await this.setState({
                band: false
            })
        }
    }
    
    delete = async(file) =>{                
        console.log("se elimino file",file);   
        const url = `https://affectuslive.herokuapp.com/savefile/deletefile?pais=${this.state.pais}&link=${file}`
        let res = await fetch(url)
        //let data = await res.json()
        console.log(res.data);
        this.viewfiles()
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
                {
                    this.state.nameFile.map((i,index)=>{
                        return(
                            <div className="card w-50" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">archivo de {this.props.ruta}</h5>
                                    <a href='#' onClick={() => this.dowlandFile(i)} className="card-text">{i}</a>
                                    <br></br>
                                    <br></br>
                                    <a href="#" onClick={(e) => this.delete(i)} className="btn btn-danger">Eliminar</a>
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
