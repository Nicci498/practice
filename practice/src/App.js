import React from 'react';
import './App.css';
import axios from 'axios';
import PlanetCard from './components/card';
import {useLocalStorage} from './components/hooks/useLocalStorage'

import { Button } from "reactstrap";


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
        .catch(error => { console.log(error) })

      const [favoriteStatus, setFavoriteStatus] = useLocalStorage('favorites', []);

      const saveToFavorites = e => {

          e.preventDefault();

          setFavoriteStatus([...favoriteStatus, e.target.value])

      };
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
        
            {this.state.user.map(planetData =>
              <>
                <PlanetCard planets={planetData} key={planetData.name} />
                    <Button value={planetData.name} onClick={this.saveToFavorites} style={{ marginBottom: "1rem", marginLeft: "1rem" }}>
                        💖
            </Button>
              </>    
              )
          
        }
      </div>
    )

  }

}

export default App;
