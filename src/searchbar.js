import react from "react";
class searchBar extends React.Component{
    state = {
        term:'Default text0'
    };
    handleChange = (event)=>{
        this.setState({
            term: event.target.value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    render(){
        
    }
}

