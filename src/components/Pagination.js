const Pagination = ({ page, setPage, data, limit }) => {
  return (
    <div className="pagination">
      <button
        className="button-prev"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Précédent
      </button>
      <span>{page}</span>

      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
