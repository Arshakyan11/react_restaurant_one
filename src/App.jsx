import { Route, Routes } from "react-router-dom";
import styles from ".//App.module.scss";
import LayOut from "./LayOut/LayOut";
import { ROUTES } from "./Routes";
import {
  AboutUS,
  ContactUs,
  Home,
  Menu,
  OurRestourants,
  Reservation,
  Search,
} from "./pages";
import Staff from "./pages/Staff/Staff";
import { Bounce, ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{ zIndex: "1000", top: "10px" }}
        limit={5}
      />
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MENU} element={<Menu />} />
          <Route path={ROUTES.ABOUTUS} element={<AboutUS />} />
          <Route path={ROUTES.RESTAURANTS} element={<OurRestourants />} />
          <Route path={ROUTES.Search} element={<Search />} />
          <Route path={ROUTES.RESERVATION} element={<Reservation />} />
          <Route path={ROUTES.STAFF} element={<Staff />} />
          <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
