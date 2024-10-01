

import Header from './component/Layout/Header';
import LayoutRouting from './component/Layout/LayoutRouting';
import Routing from './component/pages/Routing';
import { NavbarProvider } from "./../src/component/context/NavbarContext";

function App() {
  
  return (
    <NavbarProvider>
    <div className="App">
      
      <LayoutRouting/>
    </div>
    </NavbarProvider>
  );
}

export default App;
