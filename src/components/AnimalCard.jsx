import animal from "../data/animals.json";

const AnimalCard = () => {
  return (
    <>
      {animal.animals.map((data) => {
        return (
          <div className="animal-card-wrap" key={data.type}>
            <div className="animal-card-img">
              <img src={`/images/animals/${data.image}`} alt={data.image} />
            </div>
            <div className="animal-card-label">{data.type}</div>
          </div>
        );
      })}
    </>
  );
};

export default AnimalCard;
