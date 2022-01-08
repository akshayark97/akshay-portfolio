import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import Footer from "./component/Footer";
import my_logo from "./Images/My_logo.png";
import my_image from "./Images/My_Image.png";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header logo={my_logo} />
      </div>
      <div>
        <Dashboard myPhoto={my_image} />
      </div>
    </div>
  );
}

export default App;
