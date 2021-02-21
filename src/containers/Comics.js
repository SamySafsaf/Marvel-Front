import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState(100);
  const [page, setPage] = useState(1);
  const skip = (page - 1) * limit;
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3400/comics?title=${title}&skip=${skip}&limit=${limit}`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [title, limit, page]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <div className="title-search">
        <h2>Liste des Comics Marvel</h2>
        <input
          type="text"
          value={title}
          placeholder="Rechercher"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="limit">
        <span>Nombre de Comics par page : </span>
        <select
          defaultValue="100"
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <Pagination page={page} setPage={setPage} data={data} limit={limit} />
      <div className="comic-card">
        {data.results.map((item) => {
          return <Card key={item._id} item={item} index={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
