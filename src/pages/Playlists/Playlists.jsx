import React from "react";
import "./Playlists.scss";
import PlaylistObject from "./PlaylistObject";
import { playlistsData } from "./PlaylistsData";
import { Link, useRouteMatch } from "react-router-dom";


const Playlists = () => {
    let { url } = useRouteMatch();
    return (
        <div className="playlistBackground">
        <div className="content">
        {playlistsData.map((playlist, index) => {
            return (
                <Link to={`${url}/${playlist.id}`}>
                <PlaylistObject
                    key={index}
                    background={playlist.capa}
                    playlistId={playlist.id}
                    playlistNome={playlist.nome}
                />
                </Link>
            );
        })}
        </div>
        </div>
    );
};

export default Playlists;