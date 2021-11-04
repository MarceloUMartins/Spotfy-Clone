import React from "react";
import "./PlaylistInfo.scss";
import { playlistsData } from "../Playlists/PlaylistsData";
import { useParams } from "react-router-dom";

export default function PlaylistInfo() {
  const { id } = useParams();
  const playlist = playlistsData.find((p) => p.id == id);

  return (
    <div className="Back">
      <div className="Content">
        <div className="Info">
          <div className="Container">
            <img className="Capa" src={playlist.capa} alt="Capa Playlist" />
            <h2 className="Details">{playlist.nome}</h2>
            </div>
        </div>
        <div className="Music">
        {playlist.musicas.map((musica, index) => {
            return (
              <div className="MusicInfo">
                <h3>Nome: {musica.nome}.</h3>
                <h3>Autor: {musica.autor}.</h3>
                {
                  <audio controls>
                  <source src={musica.arquivo} type = "audio/mp3" alt="Arquivo de Música"/>
                  </audio>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}