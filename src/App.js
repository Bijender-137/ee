import "./App.css";
import "./mayank.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNave from "./components/MyNave";
import Amplify from "./components/Amplify";
import Core from "./components/Core";
import Supply from "./components/Supply";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Takenomics from "./components/Takenomics";
function App() {
  return (
    <>
      <MyNave />
      <Amplify />
      <Core />
      <Supply />
      <Takenomics />
    </>
  );
}

export default App;
