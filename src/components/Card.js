const Card = ({ item, index }) => {
  return (
    <div key={index} className="card-container">
      <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
      <div className="card-text-container">
        <div>{item.name ? item.name : item.title}</div>
        <div>{item.description}</div>
      </div>
    </div>
  );
};

export default Card;
