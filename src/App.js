import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./containers/Main";
import CountryPage from "./containers/CountryPage.jsx";

import { AppState } from "./context/AppContext";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppState>
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/:code" element={<CountryPage />} />
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </Layout>
        </AppState>
      </BrowserRouter>
    </>
  );
}

export default App;
