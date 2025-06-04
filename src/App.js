import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import "./css/app.css";

const Home = lazy(() => import("./pages/Home.js"));
const Gallery = lazy(() => import("./pages/gallery.js"));
const About = lazy(() => import("./pages/about.js"));
const ContactForm = lazy(() => import("./pages/contact.js"));
// const Login = lazy(() => import("./components/login.js"));
const ErrorPage = lazy(() => import("./pages/error-page.js"));
const Decks = lazy(() => import("./pages/decks.js"))
const Bathroom = lazy(() => import("./pages/bathroomRemodel.js"))
const Kitchen = lazy(() => import('./pages/kitchenRemodel.js'))
const SheSheds = lazy(() => import('./pages/sheSheds.js'))
const Flooring = lazy(() => import('./pages/flooring.js'))
const Tile = lazy(() => import('./pages/tile.js'))

const App = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<ErrorPage />} />
        <Route path='/decks' element={<Decks />} />
        <Route path='/bathroom' element={<Bathroom />} />
        <Route path='/kitchen' element={<Kitchen />} />
        <Route path='/sheSheds' element={<SheSheds />} />
        <Route path='/tile' element={<Tile />} />
        <Route path='/flooring' element={<Flooring />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
