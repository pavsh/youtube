import React from "react";
import Searchbar from "./searchbar";
import youtube from "./youtube";
import VideoList from "./videolist";
import VideoDetail from "./videodetail";

class App extends React.Component{
  state={
    videos:[],
    selectedVideo:null,

  }
  handleSubmit = async (termFromSearchBar)=>{
    const response = await youtube.get('/search',{
      params:{
        q:termFromSearchBar,
      }
    });
    this.setState({
      videos:response.data.items
    });
  };
  handleVideoSelect = (video)=>{
    this.setState({selectedVideo:video})

  }
  render(){
    return(
      
      <div className="md:w-1/2 mx-auto bg-gray-200 dark:bg-gray-800 ">
        
        <Searchbar handleFormSubmit={this.handleSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
