import { UsersData } from "../data/UsersDataProvider";

const UsersCards = () => {
  return (
    <>
      {UsersData.map((data) => {
        return (
          <div className="card-wrap" key={data.name}>
            <h2 className="card-name">{data.name}</h2>
            <div className="card-body-wrap">
              <div className="card-body-label">Age:</div>
              <div className="card-body-text">{data.age}</div>
              <div className="card-body-label">Phone:</div>
              <div className="card-body-text">{data.phoneNumber}</div>
              <div className="card-body-label">Address:</div>
              <div className="card-body-text">{data.address}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UsersCards;
