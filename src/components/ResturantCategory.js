import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="container accod">
      <div className="grey-border"></div>
      <div className="accord-head" onClick={handleClick}>
        <span className="accod-title">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⌄</span>
      </div>
      {showItem && <ItemList itemCards={data.itemCards} />}
    </div>
  );
};

export default ResturantCategory;
