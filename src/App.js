import "./App.css";
import "./mayank.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNave from "./components/MyNave";
import Amplify from "./components/Amplify";
import Core from "./components/Core";
function App() {
  return (
    <>
      <MyNave />
      <Amplify />
      <Core/>
    </>
  );
}

export default App;
