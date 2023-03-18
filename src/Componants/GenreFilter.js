import React from 'react';

const GenreFilter = ({ genres }) => {
  const handleClick = (genre) => {
    console.log(`Filtering By ${genre}`);
  };

  return (
    <div className='genre'>
      <h3>Filter by Genre</h3>
      {genres.map(genre => (
        <button key={genre} onClick={() => handleClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
