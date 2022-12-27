
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Router,
  Routes,
} from "react-router-dom";
import './styles/global.css'
import Test from "./pages/Test";
import Layout from "./templates/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          {/* 에러페이지 */}
          <Route exact path="/" element={<Test />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
