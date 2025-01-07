import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { CreateArticle } from "./pages/CreateArticle";
import { Home } from "./pages/home";


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
    </BrowserRouter>
    </>
  )
}

export default App
