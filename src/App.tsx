import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CountryPage from "./pages/CountryPage/CountryPage";
import "./i18n";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:code" element={<CountryPage />} />
    </Routes>
  );
};

export default App;
