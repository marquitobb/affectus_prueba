import React from 'react'
import axios from 'axios';
import DeleteFile from '../delete-file/deleteFile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class FormSaveFile extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            selectedFile: null,
            ruta:'colima'
        }
    }
    
    onChangeHandler=event=>{
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    handleRuta = async (event) =>{
        await this.setState({
            ruta: event.target.value
        })          
    }

    onClickHandler = () => {
        const data = new FormData()

        data.append('ruta', this.state.ruta)
        data.append('file', this.state.selectedFile)
        
        axios({
            method: 'post',
            url: 'https://affectuslive.herokuapp.com/savefile/subir',
            data: data,
            headers: {'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            //handle success
            toast.success('Archivo guardado')
            console.log(response);
            window.location.reload(false);
        })
        .catch(function (response) {
            //handle error
            toast.error('Error archivo no guardado')
            console.log(response);
        });        
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <ToastContainer />
                </div>                
                <h1>Subir archivo en su pais</h1>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                {/*<input type="text" name="ruta" value={this.state.ruta} onChange={this.handleRuta}/>*/}
                <br></br>
                <br></br>
                <label>selecciona el estado</label>
                <select value={this.state.ruta} onChange={this.handleRuta}>
                    <option value="colima">Colima</option>
                    <option value="italia">Italia</option>
                    <option value="spain">España</option>
                    <option value="france">Francia</option>
                    <option value="eua">EUA</option>
                    <option value="mexico">Mexico</option>
                    <option value="panama">Panama</option>
                </select>
                <br></br>
                <br></br>
                <button type="button" onClick={this.onClickHandler}>Enviar</button>
                <br></br><br></br>                           
                <DeleteFile 
                ruta = {this.state.ruta}
                />
            </div>
        );
    }
}





export default FormSaveFile