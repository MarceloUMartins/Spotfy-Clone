import "./PlaylistObject.scss";


const PlaylistObject = (props) => {


    return (
        <div className = "playlistObject">
            <div className="playlistBackground">
                <img src={props.background} alt="Background"/>
            </div>
        </div>
    )
}

export default PlaylistObject