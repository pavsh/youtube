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
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className="field">
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}></input>
                    </div>
                </form>

            </div>
        )
    }
}

