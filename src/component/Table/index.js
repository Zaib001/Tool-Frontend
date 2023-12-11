import React, { useState } from "react";
import "./styles.css";

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const TruncateDescription = ({ description, maxLength }) => {
  if (description.length > maxLength) {
    return <>{description.substring(0, maxLength)} ...</>;
  }
  return <>{description}</>;
};

const PopUp = ({ isOpen, content, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="popup">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <p>{content}</p>
        </div>
      )}
    </>
  );
};

const Card = ({ movie, openPopUp }) => {
  return (
    <div className="website_container" key={movie._id}>
      <div className="image-container" style={{ height: "40%" }}>
        <img src={movie.img} alt={movie.name} id="website_image" />
      </div>
      <div className="content-container">
        <div className="name-container">
          <h2 className="website_name" alt={movie.name}>
            {movie.name}
          </h2>
          <p className={`varient-type ${movie.varient.toUpperCase()}`}>
            {movie.varient}
          </p>
        </div>
        <div>
          <br />
          {movie.genre.map((genre, index) => (
            <p key={genre} className="genera">
              {genre}
              {index !== movie.genre.length - 1 && "/"}
            </p>
          ))}
          <p>
            <TruncateDescription description={movie.description} maxLength={120} />
          </p>
        </div>
        <div className="buttons-container">
          <a href={movie.websiteUrl} target="_blank" rel="noopener noreferrer">
            <button className="website-button">Visit Website </button>
          </a>
          <a className="greview" onClick={() => openPopUp(movie._id)}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

const Table = ({ movies }) => {
  const shuffledMovies = shuffleArray([...movies]);
  const [popUpContent, setPopUpContent] = useState({
    isOpen: false,
    content: "",
  });

  const openPopUp = async (id) => {
    try {
      const selectedMovie = movies.find((movie) => movie._id === id);

      if (selectedMovie && selectedMovie.popUpDescription) {
        setPopUpContent({
          isOpen: true,
          content: selectedMovie.popUpDescription,
        });
      } else {
        console.error("Pop-up description not found for the selected movie");
      }
    } catch (error) {
      console.error("Error fetching pop-up description", error);
    }
  };

  const closePopUp = () => {
    setPopUpContent({ isOpen: false, content: "" });
  };

  return (
    <div className="row-container">
      {shuffledMovies.map((movie) => (
        <Card key={movie._id} movie={movie} openPopUp={openPopUp} />
      ))}
      <PopUp isOpen={popUpContent.isOpen} content={popUpContent.content} onClose={closePopUp} />
    </div>
  );
};

export default Table;
