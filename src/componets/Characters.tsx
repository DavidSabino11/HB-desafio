import React, { useState, useEffect, useCallback } from 'react';

import api, { authKey } from '../services/api';
import './styles/style.css'
import '../App.css'
import CharacterModel from '../models/character.model';
import { HiChevronDoubleDown  } from "react-icons/hi";

const Characters = () => {

  const [characterList, setCharacterList] = useState<CharacterModel[]>([]);

  useEffect(() => {
    async function getCharacters(): Promise<void> {
      try {
        const response = await api.get(`characters?${authKey}`);
        setCharacterList(response.data.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characterList.length;
      const response = await api.get(`characters?${authKey}`, {
        params: {
          offset,
        },
      });

      setCharacterList([...characterList, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [characterList]);

  return (
    <>
      <div className="container">
        {characterList.map((character) => (
          <div className='cardHero'>
            <div className='cardColumn' key={character.id}>
              <div className='heroImage'>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
              </div>
              <h2 className='heroName'>{character.name}</h2>
              <p className='heroDesc'>{character.description}</p>
              {character.comics.items.length > 0 ? <h3 className='heroComic'>Comic book presentations: </h3> : ''}
              {character.comics.items.map((comic) => (
                <p className='heroComicDesc' key={comic.name}>{comic.name}</p>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className='more' onClick={handleMore}>
        <HiChevronDoubleDown className="icon"></HiChevronDoubleDown>
      </div>
    </>
  );
};

export default Characters;