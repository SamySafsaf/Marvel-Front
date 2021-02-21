import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CharacterInComics = () => {
  const location = useLocation();
  const id = location.state._id;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3400/comics/${id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="character-in-comics">
      {data.comics.map((elem) => {
        return (
          <div key={elem._id} className="map-character-in-comics">
            <img
              src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              alt=""
            />
            <div className="desc-cha-in">
              <div>{elem.title}</div>
              {elem.description === "null" ? (
                <div>No description</div>
              ) : (
                <div>{elem.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterInComics;
