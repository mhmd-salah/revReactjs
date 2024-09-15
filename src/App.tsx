import Navbar from "./components/Navbar";
import UsersContext from "./context/UsersContext";
import AppRouter from "./Router";

function App() {

  return (
      <main className="text-white">
        <UsersContext>
          <Navbar />
          <Navbar.Sub text="Sub Navbar" />
          <AppRouter />
        </UsersContext>
      </main>
  );
}
export default App;
