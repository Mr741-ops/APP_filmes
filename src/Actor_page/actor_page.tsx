//merges every script that belgons on the actor page
import "./actor_page.css";

const ActorPage = () => {
  return (
    <div className="Body">
      <div className="Image-Box">
        <h3>Tom Hanks</h3>
        <img src="src/Actor_page/Tom_Hanks.jpg" className="image"></img>
      </div>
      <div className="Biography">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="Info">
        <h3>Information</h3>
        also_known_as: Thomas Jeffrey Hanks <br />
        birthday: 1956-07-09
        <br />
        gender: male
        <br />
        known_for_department: Acting
        <br />
        place_of_birth: Concord,California, USA
      </div>
    </div>
  );
};
export default ActorPage;
