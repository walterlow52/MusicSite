import React from 'react';
import ReactDOM from 'react-dom/client';
import './music_styling.css';

const total = 311;

function playlist_table(props) {
    return (
        <>
            <h1> Welcome to the Playlist Table! </h1> 
            <h2> This song contains {total} songs in the playlist. </h2>
        </>
    );
}

const container = document.getElementById("root");
const root =  ReactDOM.createRoot(container);
root.render(<playlist_table />);