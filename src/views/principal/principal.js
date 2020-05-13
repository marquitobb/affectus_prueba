import React from "react";

class Principal extends React.Component{
    constructor(props) {
        super(props);
        const { id } = this.props.match.params 
        if (parseInt(id) === 96) {
            console.log(id)
        }else{
            window.location='/main';
        } 
    }
    
    

    render() {
        return (
            <div>
                <h1>Principal page</h1>
            </div>
        );
    }
}

export default Principal