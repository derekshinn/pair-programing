import './MusicPlayer.scss'
import { Component } from  'react'
import logo from '../../assets/moodify.png'
import happy from '../../assets/Face(happy).png'
import energetic from '../../assets/Face(energetic).png'
import chill from '../../assets/Face(chill).png'
import anxious from '../../assets/Face(anxious).png'
import angry from '../../assets/Face(angry).png'
import neutral from '../../assets/Face(neutral).png'
import sad from '../../assets/Face(sad).png'
import social from '../../assets/Face(social).png'
import tired from '../../assets/Face(tired).png'



class MusicPlayer extends Component {

    

    render(){
        const {handleClick} = this.props
        return(
            <section className="music-player">
                <img src={logo} className="emotion__logo" alt="logo" />
                <h2>How are you feeling today?</h2>
                <section className="emotion__wrapper">
                    <button onClick={handleClick} value="happy"><img src={happy} className="emotion__wrapper--face" alt="happy"/></button>
                    <button  onClick={handleClick} value="happy"><img src={energetic} className="emotion__wrapper--face" alt="energetic" /></button>
                    <button  onClick={handleClick} value="happy" ><img src={anxious} className="emotion__wrapper--face" alt="anxious" /></button>
                    <button onClick={handleClick} value="happy"><img src={angry} className="emotion__wrapper--face" alt="angry" /></button>
                    <button onClick={handleClick} value="happy"><img src={neutral} className="emotion__wrapper--face" alt="neutral" /></button>
                    <button onClick={handleClick} value="happy"><img src={chill} className="emotion__wrapper--face" alt="chill" /></button>
                    <button onClick={handleClick} value="happy"><img src={sad} className="emotion__wrapper--face" alt="sad" /></button>
                    <button onClick={handleClick} value="happy"><img src={social} className="emotion__wrapper--face" alt="social" /></button>
                    <button><img src={tired} className="emotion__wrapper--face" alt="tired" /></button>
                </section>






                    {/* {listPlayer.map((item) => 
                                <li key={item.id}>{item.name} | <button className="btn btn-xs btn-warning" onClick={() => handlePlay(item.id)}>play</button></li>
                    )} */}
                
            </section>
        )
    }
}

export default MusicPlayer;