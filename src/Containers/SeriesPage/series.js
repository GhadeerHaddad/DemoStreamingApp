import React, { Component } from 'react';
import Card from '../../Components/Card/card';
import '../SeriesPage/series.css';

class Series extends Component {

constructor(props){
  super(props);
  this.state = {
    title: 'Program Title',
    items: [],
    isLoaded: false,
    error: false

  }
}
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
    .then( data => data.json())
    .then(json => { 
        const list = json.entries;
        this.setState({
            isLoaded: true,
            items : list}  );
    } ).catch(error => {
        console.log(error);
        this.setState({error: true})
    })
    
}
  render(){
    let { items, isLoaded, error} = this.state;

    if(!isLoaded){  
        if(error){
           return <p className="load-class">Oops, something went wrong... </p>
        } else{
            return <div className="load-class"> Loading...</div>
        }
        }
    else{
    return (
        <div className="series-page-class">
        {
    items.filter( (item) => ( item.releaseYear >= 2010 && item.programType === "series")).slice(0,21)
    .sort((a,b) => (a.title > b.title) ? 1 : -1)
    .map( i => (
       <Card className="series-class" key={i.title} caption={i.title} image={i.images["Poster Art"].url} alt={i.title}/>
    )
    )
  }
      </div>
    );
}
}

}

export default Series;
