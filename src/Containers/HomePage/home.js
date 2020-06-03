import React, { Component } from "react";
import Header from "../../Components/Header/header";
import Content from "../../Components/Content/content";
import Footer from "../../Components/Footer/footer";
import { Route, Link, Switch} from "react-router-dom";
import Card from "../../Components/Card/card";
import Movies from "../MoviesPage/movies";
import Series from "../SeriesPage/series";
import "../HomePage/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Popular Titles",
      id: "h",
      showing: true,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {  
      if(this.state.clicked){
          this.handleClick();
      }
}
 handleClick(d){
     console.log("showing is:");
     console.log(this.state.showing);
     let id=d;
    this.setState( {
        showing: !this.state.showing,
        clicked: !this.state.clicked,
        title: id
      });
      switch (id) {
        case 'm':
            {
                this.setState({title :"Popular Movies"} );
                break;
            }
        case 's':
            {
               this.setState({title :"Popular Series" });
               break;
            }
        default:
            {
                this.setState({title: "Popular Titles"});
            }
       }
  }
  handleClickHome(id){
   this.setState( {
       showing: true,
       id: 'h'
     });
  if(id === 'h'){
      this.setState({title: "Popular Titles"});
    }
 }
  render() {
   // const {title , id, showing} = this.state;
    return (
      <div>
        <Link to="/">
          <div id="h" onClick={() => this.handleClickHome('h')}>
            <Header />
          </div>
        </Link>
        <Content title={this.state.title} />
        <div className="content-home-card">
          <Link to="/movies">
            <div id="m" onClick={() => this.handleClick('m')}>
            { this.state.showing && <Card  className="content-card-item" caption="Popular Movies"  /> }
            </div>
          </Link>
          <Link  to="/series">
            <div id="s" onClick={() => this.handleClick('s')} >  
            { this.state.showing && <Card  className="content-card-item" caption="Popular Series"  /> }
            </div>
          </Link>
        </div>
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/series" exact component={Series} />
          {/* <Route exact path="/" render={() => (window.location = "https://google.com")} /> */}
        </Switch>
        <Footer />
      </div>
    );
    }
}

export default Home;
