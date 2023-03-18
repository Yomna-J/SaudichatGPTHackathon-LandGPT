import LandingPage from "./components/LandingPage";

import { useEffect, useState } from "react";

function Content() {

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001/generate");
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LandingPage />
   
    </div>
  );
}

export default Content;
