import React from 'react'
import axios, {post} from 'axios';

class FormSaveFile extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            selectedFile: null
        }
    }
    
   /*onChange(e){
        let files = e.target.files
        
        let reader = new FileReader()
        reader.readAsDataURL(files[0])

        var fileObject = this.refs.uploader.getFileObject()
        var formData = files
        formData.append('file', fileObject);
        const url = "http://localhost:4000/savefile/subir"

        fetch(url, {
            method: 'POST',
            body: formData
        });
        
        reader.onload=(e)=>{        
            const formdata = {file: e.target.result}
            
            return post(url, formdata)
                .then(response => console.warn("result", response))
            const formData = 
            formData.append('file', fileObject);
            fetch(url, {
                method: 'POST',
                body: formdata
            });
        }
    }*/

    onChangeHandler=event=>{
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:4000/savefile/subir", data, { 
            // receive two parameter endpoint url ,form data 
        }).then(res => { // then print response status
            console.log(res.statusText)
        })
    }

    render() {
        return (
            <div>
              <h1>React js file upload</h1>
              <input type="file" name="file" onChange={this.onChangeHandler}/>
              <button type="button" onClick={this.onClickHandler}>Upload</button>
            </div>
        );
    }
}

export default FormSaveFile