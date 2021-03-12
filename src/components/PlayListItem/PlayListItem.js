import './PlayListItem.scss'

const PlayListItem = ({ playList, handleClick }) => {
    return(
        <div className="list-item">
            <div>
                <img src={playList.images[0].url} alt="itemPhoto" className="list-item__image" />
            </div>
            <div className="list-item__content">
                <div>{playList.name}</div>
                <div>Owner: {playList.owner.display_name}</div>
                <div><button onClick={() =>{handleClick(playList.id)}} className="list-item__button">Like <span className="material-icons list-item__icon">favorite_border</span></button></div>
            </div>
        </div>
    )
}

export default PlayListItem;