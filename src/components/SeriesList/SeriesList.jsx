import "./index.css";
import seriesobj from "../../assets/seriesobj";
const SeriesList = () => {
  return (
    <div className="SeriesList">
    

      {seriesobj.map((seriesobj) => (
        <img
          className="SeriesList__poster"
          src={seriesobj.poster}
          alt="image"
          key={seriesobj.id}
        />
      ))}
    </div>
  );
};
export default SeriesList;
