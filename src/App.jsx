import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { CreateArticle } from "./pages/CreateArticle";
import { Home } from "./pages/home";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/create" element={<CreateArticle />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose="2000" />
    </BrowserRouter>
    </>
  )
}

export default App
