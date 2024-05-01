import React from 'react';
import ReactDOM from 'react-dom/client';

function playlist_table(props) {
    return <h1> Welcome to the Playlist Table! </h1>;
}

const container = document.getElementById("root");
const root =  ReactDOM.createRoot(container);
root.render(<playlist_table />);