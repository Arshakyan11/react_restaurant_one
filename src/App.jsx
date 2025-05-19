import { Route, Routes } from "react-router-dom";
import styles from ".//App.module.scss";
import LayOut from "./LayOut/LayOut";
import { ROUTES } from "./Routes";
import {
  AboutUS,
  Home,
  Menu,
  OurRestourants,
  Reservation,
  Search,
} from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MENU} element={<Menu />} />
          <Route path={ROUTES.ABOUTUS} element={<AboutUS />} />
          <Route path={ROUTES.RESTAURANTS} element={<OurRestourants />} />
          <Route path={ROUTES.Search} element={<Search />} />
          <Route path={ROUTES.RESERVATION} element={<Reservation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
