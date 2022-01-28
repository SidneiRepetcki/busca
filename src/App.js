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
                  `${api}AIzaSyDJHLPBdVBrkAoKALCgJMFvdi_7NE4FCnw&part=snippet&maxResults=5&q=${text}`
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
                {text && !info.data && (
                  <span>Carregando..</span>
                )}
                {info.data && (
                  <ul className="music-list">
                      {info.data.map((musica) => (
                        <li key={musica.id}>
                          <img 
                            src={musica.attributes.posterImage.small}
                            alt={musica.attributes.canonicalTitle}
                            />
                            {musica.attirubutes.canonicalTitle}
                        </li>

                      ))}
                  </ul>
                )}
        </div>       
    );
  }


