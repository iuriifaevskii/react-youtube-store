import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC9npeURMghaSr1Wb-L5OTdO7RDdWJ-66E';


const App = () => {
    return <div>
        <SearchBar />
    </div>; 
}

ReactDOM.render(<App />, document.querySelector('.container'));  