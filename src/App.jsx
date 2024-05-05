import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes />
      </main>
      <footer>
        <p>&copy; 2024 EcoTech Solutions. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
