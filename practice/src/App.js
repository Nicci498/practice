import React from 'react';
import './App.css';
import axios from 'axios';
import PlanetCard from './components/card';

//"https://swapi.co/api/planets/"
class App extends React.Component{
  
  constructor() {
    super()
    this.state={
    user:[]
    }

  }
  componentDidMount(){
    axios.get('https://swapi.co/api/planets/')
    .then(response => {
      
      console.log(response.data.results)      
      this.setState({user:response.data.results})
      console.log(this.state, "our new state")

    })
    .catch(error => {console.log(error)})
  }

  render() {

    console.log("rendering...");
    console.log(this.state);

    if (this.state.length === 0)
      {
        return "Retrieving data...";
      }

    return (
      <div>
        {
          { this.state.user.map((planetData) => (

            return (<PlanetCard planets={planetData} />)
          )
        }
      </div>
    )

  }

}

export default App;
