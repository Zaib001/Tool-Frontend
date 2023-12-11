import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Error from "./pages/Error/Error";

const Home = React.lazy(() => import('./pages/Home/Home'))
const Crypto = React.lazy(() => import('./pages/Crypto/Crypto'))
const SubmitBlog = React.lazy(() => import('./pages/SubmitBlog/SubmitBlog'))
const PromotionForm = React.lazy(() => import('./component/Promotion/Promotion'))
const ProductDisplay = React.lazy(() => import('./component/Payment/Payment'))



function App() {
 


  return(
    <div className={styles.container}>
      <BrowserRouter>
      <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />

            <Route
              path="AI tools"
              exact
              element={
                <div className={styles.main}>
                  <Crypto />
                </div>
              }
            />

            <Route
              path="submit"
              exact
              element={
                
                  <div className={styles.main}>
                    <SubmitBlog />
                  </div>
              
              }
            />
          <Route
              path="*"
              element={
                <div className={styles.main}>
                  <Error />
                </div>
              }
            />
            <Route
              path="/promotion-form"
              element={
                <div className={styles.main}>
                  <PromotionForm />
                </div>
              }
            />
            <Route
              path="/payment"
              element={
                <div className={styles.main}>
                  <ProductDisplay />
                </div>
              }
            />

          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
