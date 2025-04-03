import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  return <h1 className={theme}>Welcome to the Home Page</h1>;
};

export default Home;

