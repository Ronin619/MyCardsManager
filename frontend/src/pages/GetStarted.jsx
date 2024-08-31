import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import "../css/getStarted.css";

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <Navbar h1="Get Started" className="get-started-navbar">
        <HamburgerMenu className="getStarted-dropDown" />
      </Navbar>
      <div className="instruction-container">
        <div className="instruction-body">
          <h1 className="instruction-title">Instructions</h1>
          <p className="instruction-intro">
            Welcome! Here you will find instructions on how to utilize the app
            features to manage your trading card inventory.
          </p>

          <div className="instruction-section">
            <h2 className="instruction-heading">
              View your entire card collection
            </h2>
            <ul className="instruction-list">
              <li className="instruction-item">
                Click the <ion-icon name="file-tray-full"></ion-icon> icon to
                view your entire inventory of cards. Click the icon again to
                clear the table.
              </li>
            </ul>
          </div>

          <div className="instruction-section">
            <h2 className="instruction-heading">Adding a new card</h2>
            <ol className="instruction-steps">
              <li className="instruction-step">
                Click the <ion-icon name="add-circle"></ion-icon>
                icon to open a modal.
              </li>
              <li className="instruction-step">
                Enter the set, name, card number, quantity, and market value. BE
                SURE TO CLICK SAVE!
              </li>
            </ol>
          </div>

          <div className="instruction-section">
            <h2 className="instruction-heading">Editing a card</h2>
            <ol className="instruction-steps">
              <li className="instruction-step">
                Click on the
                <ion-icon name="pencil"></ion-icon>
                icon to open a modal.
              </li>
              <li className="instruction-step">
                Feel free to edit any card details by changing the inputs under
                the labels. BE SURE TO CLICK SAVE!
              </li>
            </ol>
          </div>

          <div className="instruction-section">
            <h2 className="instruction-heading">Deleting a card</h2>
            <ul className="instruction-list">
              <li className="instruction-item">
                Click on the
                <ion-icon name="trash"></ion-icon>
                icon to delete the selected card.
              </li>
              <p className="instruction-warning">
                WARNING: make sure you are certain that you wish to delete the
                selected card.
              </p>
            </ul>
          </div>

          <div className="instruction-section">
            <h2 className="instruction-heading">Filtering cards</h2>
            <ul className="instruction-list">
              <li className="instruction-item">
                Enter a keyword in the search bar and click the{" "}
                <ion-icon name="search" className="search-icon"></ion-icon>
                icon to display all cards in the table matching that keyword.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
