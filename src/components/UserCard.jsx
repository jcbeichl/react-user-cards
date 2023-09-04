import user from "../data/users.json";

const UserCard = () => {
  const usersList = user.users;
  return (
    <>
      {usersList.map((data) => {
        return (
          <div className="card" key={data.name}>
            <h2 className="name">{data.name}</h2>
            <div className="body">
              <div className="label">Age:</div>
              <div>{data.age}</div>
              <div className="label">Phone:</div>
              <div>{data.phoneNumber}</div>
              <div className="label">Address:</div>
              <div>{data.address}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserCard;
