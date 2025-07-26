import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <form>
        <Accordion showContent={showContent} setShowContent={setShowContent} />
      </form>
    </>
  );
}

export default App;
