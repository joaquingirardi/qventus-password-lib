import { GlobalLayout } from "./components/layout/global-layout.tsx";
import { MainScreen } from "./screens/main/main-screen.tsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GlobalLayout component={<MainScreen />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
