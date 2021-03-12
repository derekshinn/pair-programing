import './MusicPlayer.scss'
import { Component } from  'react'

class MusicPlayer extends Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render(){
        const {listPlayer, handlePlay, handleSubmit} = this.props
        return(
            <section className="music-player">
                <h2>Music Player</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="search" onChange={this.handleChange}/>
                </form>
                <ul>
                    {listPlayer.map((item) => 
                                <li key={item.id}>{item.name} | <button className="btn btn-xs btn-warning" onClick={() => handlePlay(item.id)}>play</button></li>
                    )}
                </ul>
            </section>
        )
    }
}

export default MusicPlayer;