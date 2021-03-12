import './App.scss';
import { Component } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Login from './components/Login/Login';
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyAPI = new SpotifyWebApi();


class App extends Component {

  state = {
    token: '',
    listSpotify : [],
    albums: [],
    artists: [],
    playlists: []
  }

  setToken() {
    let token = this.state.token
    spotifyAPI.setAccessToken(token)
  }

  componentDidMount() {
    let token = window.location.hash
                          .substr(1)v
                          .split("&")
                          .reduce((initial, item) => {
                            let parts = item.split("=")
                            initial[parts[0]] = decodeURIComponent(parts[1])
                            return initial
                          },{})
    spotifyAPI.setAccessToken(token.access_token)
    this.setState({
      token: token.access_token
    })
    window.location.hash = '';

    
    

    let list =spotifyAPI.getFeaturedPlaylists()
        .then(response => {
          this.setState ({
            listSpotify : response.playlists.items
          })
        })
  }


  handlePlay =  (id) => {
    let token = (this.state.token)
    
      spotifyAPI.play([{
        "context_uri": `spotify:playlist:${id}`,
        "offset":{
          "position": 5
        }

      }])
  }

  handleSubmit = (e) => {
    e.preventDefault()
      this.setToken()
      spotifyAPI.search(e.target.search.value,["album","artist","playlist"])
      .then(response =>{
        this.setState({
          albums: response.albums.items,
          artists: response.artists.items,
          playlists: response.playlists.items
        }, () => {
          console.log(this.state.artists)
          console.log(this.state.albums)
          console.log(this.state.playlists)
        })
      })
  }

  render(){
    return (
      <div className="App">
        { this.state.token ? (<MusicPlayer listPlayer={this.state.listSpotify} handlePlay= {this.handlePlay} handleSubmit={this.handleSubmit}/>) :(<Login />)}
      </div>
    );
  }
}

export default App;
