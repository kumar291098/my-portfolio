// LayoutRouting.tsx
import React , {useContext} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Routing from "../pages/Routing";
import "./LayoutRouting.css"; // Ensure this is imported
import { useNavbarContext } from "../context/NavbarContext";
const LayoutRouting: React.FC = () => {
    const { isNavbarExpanded } = useNavbarContext();
  return (
    
      <div className="d-flex flex-column">
        {/* The Header will be fixed, so ensure it's wrapped properly */}
        <header>
          <Header />
        </header>
        <main className={`content-section ${isNavbarExpanded ? 'expanded' : 'collapsed'}`}>
          {/* Main content area */}
          <Routing />
        </main>
      </div>
    
  );
};

export default LayoutRouting;
