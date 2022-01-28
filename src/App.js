import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import './index.css';

const api='https://www.googleapis.com/youtube/v3';

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

        useEffect(() => {
            setInfo({});
            if (text) {
                fetch(
                  `${api}/search?key=AIzaSyDJHLPBdVBrkAoKALCgJMFvdi_7NE4FCnw&part=snippet&maxResults=9&q=${text}`
                )
                  .then((response) => response.json())
                  .then((response) => {
                    setInfo(response);
                  });
              } 
        }, [text]);

    return (
        <div className="App">
            <h1>Videos</h1>
                <SearchInput
                  value={text}
                  onChange={(search) => setText(search)}
                />
                {text && !info.items && (
                  <span>Carregando..</span>
                )}
                {info.items && (
                  <div className="music-list">
                      {info.items.map((musica) => (
                        <div>                    
                            <iframe
                              title="Video"
                              className="Video"
                              width="500"
                              height="370"
                              src={`https://www.youtube.com/embed/${musica.id.videoId}`}
                              frameborder="0"
                              allowfullscreen
                            />
                        </div>

                      ))}
                  </div>
                )}
        </div>       
    );
  }


