/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
const FileDownload = require('js-file-download');

class DowFile extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            pais: this.props.pais,
            selectFile: '',
            nameFile: []
        }
    }

    componentDidMount(){
        this.viewfiles()
    }
    
    viewfiles = async() =>{
        try {
            const url = `http://localhost:4000/savefile/viewfiles?country=${this.state.pais}`
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

    dowlandFile = async (archivo) => {
        console.log("archivo-->", archivo);
        
        const url = `http://localhost:4000/savefile/download?pais=colima&filename=${archivo}`
        axios.get(url)
        .then(response => {
            // Obtenemos los datos
            console.log(response); 
            FileDownload(response.data, archivo);          
        })
        .catch(e => {
            // Capturamos los errores
            console.log(e);
        })
    }

    render() {
        return (
            <div>
                <h4>Selecciona el que quieras descargar</h4>
                {
                    this.state.nameFile.map((i,index)=>{
                        return(
                            <div className="container" key={index}>
                                <a onClick={() => this.dowlandFile(i)} href="#">{i}</a>
                            </div>
                        )
                    })
                }                
            </div>
        );
    }
}

export default DowFile