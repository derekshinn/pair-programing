import PlayListItem from '../PlayListItem/PlayListItem'
import './PlayList.scss'

const PlayList = ({playLists, handleClick}) => {
    return(
        <div>
            <h2>This is the playlist</h2>
            <ul className="items-list">
                {playLists.map(playList => { 
                   return <li key={playList.id}><PlayListItem playList={playList} handleClick={handleClick}/></li>     
                })}
            </ul>
        </div>
    )
}

export default PlayList;