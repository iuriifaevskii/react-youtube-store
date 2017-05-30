import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCA_e5iVL5iyWUVpIGV5ndPlWk959iMgwg';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo:null 
        };

        YTSearch({key: API_KEY, term:'surfboards'}, (data) => {
            this.setState({
                 videos:data,
                 selectedVideo: data[0]
                 }); // this.setState({videos:videos});
        console.log(data);
        });
    }

    

    render (){
        return(
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} />
        </div>
        ); 
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));  