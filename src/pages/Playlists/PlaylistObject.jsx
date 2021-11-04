import "./PlaylistObject.scss";

const PlaylistObject = (props) => {
  return (
    <div className="playlistObject">
      <div className="playlistBackground">
        <img src={props.background} alt="Background" />
        {/*<h1 className="Nome">{props.playlistNome}</h1>*/}
      </div>
    </div>
  );
};

export default PlaylistObject;
