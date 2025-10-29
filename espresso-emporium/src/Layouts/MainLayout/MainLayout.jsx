import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
