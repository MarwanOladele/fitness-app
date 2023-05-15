import Navbar from "@/pages/navbar/Navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  ); 
};

export default App;
 