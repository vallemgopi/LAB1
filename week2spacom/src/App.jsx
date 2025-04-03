import { BrowserRouter as Router, Routes, Route, Link } from "npm ";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext"; // Import useTheme

function App() {
  const { theme, toggleTheme } = useTheme(); // Access theme and function

  return (
    <Router>
      <div className={theme}> {/* Apply theme */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link>
        </nav>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Toggle Button */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
