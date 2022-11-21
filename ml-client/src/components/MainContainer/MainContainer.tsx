import Footer from "../Footer/Footer";
import Classifier from "../Classifier/Classifier";
import Navbar from "../Navbar/Navbar";
import "./mainContainer.scss";

function MainContainer() {
  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="classifier-content">
        <h1>Image classifier</h1>
        <Classifier />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;
