import { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(100);
  const [page, setPage] = useState(1);
  const skip = (page - 1) * limit;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://marvel-back-sam.herokuapp.com/?name=${name}&skip=${skip}&limit=${limit}`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name, limit, page]);

  return (
    <div>
      {isLoading ? (
        <div>En cours de chargement...</div>
      ) : (
        <>
          <div className="title-search">
            <h2>Liste des personnages Marvel</h2>
            <input
              type="text"
              value={name}
              placeholder="Rechercher"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="limit">
            <span>Nombre de personnages par page :</span>
            <select
              defaultValue="100"
              onChange={(event) => {
                setLimit(event.target.value);
              }}
            >
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <Pagination page={page} setPage={setPage} data={data} limit={limit} />
          <div className="characters-card">
            {data.results.map((item) => {
              return (
                <Link
                  to={{
                    pathname: `/comics/${item._id}`,
                    state: { _id: item._id },
                  }}
                >
                  <Card item={item} index={item._id} />
                </Link>
              );
            })}
          </div>
          <Pagination page={page} setPage={setPage} data={data} limit={limit} />
        </>
      )}
    </div>
  );
};

export default Characters;
