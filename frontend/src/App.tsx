import Layout from "./components/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import WelcomePage from "./pages/labeling/welcome";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/welcome" element={<WelcomePage/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
