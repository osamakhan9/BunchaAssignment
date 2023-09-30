import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <Products />
      </div>
      <hr />
    </div>
  );
}

export default App;
