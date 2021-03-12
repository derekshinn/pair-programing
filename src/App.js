import './App.scss';
import { Component } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Login from './components/Login/Login';
import SpotifyWebApi from 'spotify-web-api-js'
import PlayList from './components/PlayList/PlayList';


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
                          .substr(1)
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
        },() =>{
          console.log(this.state.albums)
        })
      })
  }

  handleLikes = (id) =>{
    console.log(id)
    this.setToken()
    spotifyAPI.followPlaylist(id)
  }

  handleClick = (e) =>{
    console.log(e.target.alt)
    this.setToken()
      spotifyAPI.search(e.target.alt,["album","artist","playlist"])
      .then(response =>{
        this.setState({
          albums: response.albums.items,
          artists: response.artists.items,
          playlists: response.playlists.items
        },() =>{
          console.log(this.state.albums)
        })
      })
    
  }

  render(){
    return (
      <div className="App">
        { this.state.token ? (
                <div>
                <MusicPlayer listPlayer={this.state.listSpotify} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
                <PlayList playLists={this.state.playlists}  handleClick={this.handleLikes} />
                </div>
              ) :
              (<Login />)}
      </div>
    );
  }
}

export default App;
