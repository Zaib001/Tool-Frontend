import React, { useState } from 'react';
import styles from './styles.module.css';

const Genre = ({ genres, filterGenre, setFilterGenre }) => {
  const [selectedGenres, setSelectedGenres] = useState(new Set(filterGenre));

  const onClick = (selectedGenre) => {
    const updatedSelectedGenres = new Set(selectedGenres);

    if (updatedSelectedGenres.has(selectedGenre)) {
      updatedSelectedGenres.delete(selectedGenre);
    } else {
      updatedSelectedGenres.add(selectedGenre);
    }

    setSelectedGenres(updatedSelectedGenres);
    setFilterGenre(Array.from(updatedSelectedGenres));
  };

  const isGenreSelected = (genre) => selectedGenres.has(genre);

  return (
    <div className={styles.container}>
      <div className={styles.genre_container}>
        {genres.map((genre) => (
          <div
            key={genre}
            className={`${styles.genre} ${isGenreSelected(genre) ? styles.selected : ''}`}
            onClick={() => onClick(genre)}
          >
            <p className={styles.genre_label}>{genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
