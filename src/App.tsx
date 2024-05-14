import MainLayout from "./components/layout/MainLayout";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MainLayout>
      {/* <HomePage /> */}
      <ProjectDescriptionPage />
    </MainLayout>
  );
}

export default App;
