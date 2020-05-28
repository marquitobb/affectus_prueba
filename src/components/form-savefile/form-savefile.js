import React from 'react'
import axios from 'axios';

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
        console.log(this.state.ruta);
    }

    onClickHandler = () => {
        const data = new FormData()

        data.append('ruta', this.state.ruta)
        data.append('file', this.state.selectedFile)
        
        axios({
            method: 'post',
            url: 'http://localhost:4000/savefile/subir',
            data: data,
            headers: {'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

        /*var data = {
            file: this.state.ruta
        }
        axios.post("http://localhost:4000/savefile/subir", { 
            ruta: this.state.ruta
        },data).then(res => { // then print response status
            console.log(res.statusText)            
        })
        */
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default FormSaveFile