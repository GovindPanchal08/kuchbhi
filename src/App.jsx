import Nav from "./components/Nav";
import MainRoutes from "./routing/MainRoutes";

const App = () => {
  return (
    <div className="bg-gray-600 h-screen w-screen p-10 " >
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
