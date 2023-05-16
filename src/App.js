import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Description from "./components/Description";
import Projects from "./components/Projects";

let sectionHeaderCrt = document.getElementById("section-header");

function App() {
  return (
    
    <div>

      {function SectionHeaderFunction () {
        sectionHeaderCrt.setAttribute("sectionHeaderBefore", "1")
        sectionHeaderCrt.setAttribute("sectionHeaderAfter", "1")
      }}

      <header>
        <Navbar />
      </header>
      <main>
        <Logo />
        <Description />
        <Projects />
      </main>
    </div>
  );
}

export default App;