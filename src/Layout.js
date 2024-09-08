import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({bodyStyle}) => {
  return (
    <div id="body" style={bodyStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;