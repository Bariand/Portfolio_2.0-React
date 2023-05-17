import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Description from "./components/Description";
import Projects from "./components/Projects";

function App() {

  const [Language, SetLanguage] = useState(0);

  const HandleLanguage = () => {
    if (Language === 0) {
      return <Navbar value = {SetLanguage(1)} />;
    } else {
      return <Navbar value = {SetLanguage(0)} />;
    }
  };

  return (
    <div>
      <header>
        <Navbar 
          HandleLanguage = {HandleLanguage}
          Language = {Language}
        />
      </header>
      <main>
        <Logo
          HandleLanguage = {HandleLanguage}
          Language = {Language}
        />
        <Description
          HandleLanguage = {HandleLanguage}
          Language = {Language}
        />
        <Projects
          HandleLanguage = {HandleLanguage}
          Language = {Language}
        />
      </main>
    </div>
  );
}

export default App;