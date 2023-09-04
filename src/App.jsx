import AnimalCard from "./components/AnimalCard";
import UserCard from "./components/UserCard";
import UsersCards from "./components/UsersCards";

const App = () => {
  return (
    <>
      <section className="usercard-json">
        <UserCard />
      </section>
      <section className="usercard-jsx">
        <UsersCards />
      </section>
      <section className="animalcard-json">
        <AnimalCard />
      </section>
    </>
  );
};

export default App;
