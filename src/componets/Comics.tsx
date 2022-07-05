import React, { useState, useCallback } from "react"

import api, { authKey } from "../services/api";
import ComicModel from "../models/comic.model";

const Comics = () => {

  const [comicList, setComicList] = useState<ComicModel[]>([]);
  const [search, setSearch] = useState('');
  const [erroSearch, setErroSearch] = useState(false);

  const handleSearch = useCallback(async () => {
    try {
      const response = await api.get(`comics?${authKey}`, {
        params: {
          title: search,
        },
      });
      setComicList([...response.data.data.results, ...comicList]);
      setSearch('');
      setErroSearch(false);
    } catch (err) {
      console.log(err);
      setErroSearch(true);
    }
  }, [search, comicList]);

  return (
    <>
      <div className="search">
        <label
          htmlFor="input">
          <datalist id="marvelsearch">
            <option>Captain America</option>
            <option>Doctor Strange</option>
            <option>Falcon</option>
            <option>Hulk</option>
            <option>Iron Man</option>
            <option>Loki</option>
            <option>Spider-man</option>
            <option>Thanos</option>
            <option>Thor</option>
            <option>Vision</option>
          </datalist>
          <input
            id="input"
            type="text"
            list="marvelsearch"
            placeholder={"Character name or story"}
            onChange={event => setSearch(event.target.value)}
            value={search}
          ></input>
        </label>
      </div>

      <div className="search">
        <button onClick={handleSearch}>Search comic</button>
      </div>

      {erroSearch && (
        <div className="erro">
          <h2>
            Enter the name of the character or comic correctly!
          </h2>
        </div>
      )}

      <div className="container">
        {comicList.map((comic) => (
          <div className='cardComic'>
            <div className='cardColumn' key={comic.id}>
              <div className='heroImage'>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title}></img>
              </div>
              <h2 className='heroName'>{comic.title}</h2>
              <p className='heroDesc'>{comic.description}</p>

              {comic.creators.items.length > 0 ? <h3 className='heroComic'>Creators: </h3> : ''}
              {comic.creators.items.map((creator) => (
                <p className='comicCreators' key={creator.name}>{creator.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Comics