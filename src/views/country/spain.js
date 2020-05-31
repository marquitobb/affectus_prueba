/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import DowFile from '../../components/dowland-file/dowFile';
class Spain extends React.Component{
    render() {
        return (
            <div>
                <div className="container" style={{marginTop: '3%'}}>
            <h2>España</h2>
                </div>
                    <div className="container" style={{marginTop: '4%'}}>
                    <p>España es uno de los paises con más contagios en el mundo. Confirmados 229 k (Actualizado el 14/05/2020)</p><br />
                    <p>En los siguientes links se pueden descargar los archivos respecto a España</p>
                    <div className="row">
                        <div className="col-md-4">
                        <div style={{width: '100%', backgroundColor: 'rgb(226, 226, 226)', borderRadius: '3px', marginTop: '6%', marginBottom: '5%'}}>
                            <center>
                            <h3>Presidente</h3>
                            </center> 
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{width: '100%', backgroundColor: 'rgb(226, 226, 226)', borderRadius: '3px', marginTop: '6%', marginBottom: '5%'}}>
                            <center>
                            <h3>OMS</h3>
                            </center>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{width: '100%', backgroundColor: 'rgb(226, 226, 226)', borderRadius: '3px', marginTop: '6%', marginBottom: '5%'}}>
                            <center>
                            <h3>Secretaria de salud</h3>
                            </center>
                            <a href="https://www.google.com/search?q=contagiados+en+espa%C3%B1a&rlz=1C1CHBD_esMX842MX842&oq=contagiados+en+espa%C3%B1a&aqs=chrome.0.0l8.5046j0j7&sourceid=chrome&ie=UTF-8" target="_blank">Datos del Covid España</a>
                        </div>
                        </div>
                    </div>
                    <DowFile 
                    pais="colima"
                    />
                </div>
            </div>
        );
    }
}

export default Spain