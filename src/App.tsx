import MainLayout from "./components/layout/MainLayout";
import { Outlet } from "react-router-dom";
import ReactGA from "react-ga";

ReactGA.initialize(import.meta.env.VITE_ANALTTICS_ID);

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
