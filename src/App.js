import Navbar from "./navbar/Navbar";
import Topbar from "./topbar/Topbar";
import Home from "./Home/Home";
import Page from "./Page/Page";
import Contactus from "./Contactus/Contactus";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Topbar/>
    <BrowserRouter>
    <Navbar/>
 
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/bollywood" element={<Page></Page>}></Route>
      <Route path="/contact" element={<Contactus></Contactus>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
