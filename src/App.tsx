import Navbar from "@/pages/navbar/Navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/pages/home/Home";
import Benefits from "@/pages/benefits/Benefits";
import Ourclasses from "@/pages/ourClasses/Ourclasses";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Ourclasses />
    </div>
  );
};

export default App;
