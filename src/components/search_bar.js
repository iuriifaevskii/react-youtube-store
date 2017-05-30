import React, { Component } from 'react';


class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term : ''}; //оголошує обєкт
        console.log(this.state);
    }
    
    render(){
        //this.setState({term: event.target.value}) 
        //те ж саме що, але так не правильно this.state.term = event.target.value
        return ( 
            <div>
                <input onChange = { event => this.setState({term: event.target.value})} />;
                //змінює значення обєкта і присвоює йому значення інпута
                value of input : {this.state.term}
                // виводить на екран обєкт стейт
            </div>
        );
    }

}


export default SearchBar;