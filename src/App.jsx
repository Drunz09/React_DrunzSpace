import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { DetailsPage } from "./pages/DetailPage";
import { CartPage } from "./pages/CartPage";
import { successPage } from "./pages/SuccesPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" Component={ErrorPage} />
          <Route path="/" Component={HomePage} />
          <Route path="/cart" Component={CartPage} />
          <Route path="/details/:idc" Component={DetailsPage} />
          <Route path="/succes" Component={successPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
