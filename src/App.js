import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Description from "./components/Description";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
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