import React from "react";

class Searchbar extends React.Component{
    state = {
        term:'Default text'
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
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className="text-gray-800 dark:text-gray-500">
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}></input>
                    </div>
                </form>

            </div>
        )
    }
}
export default Searchbar;

