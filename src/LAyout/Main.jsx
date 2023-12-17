import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shear pages/Navbar";
import Section from "../Component/Section";


const Main = () => {
    return (
      <Section>
          <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
      </Section>
    );
};

export default Main;