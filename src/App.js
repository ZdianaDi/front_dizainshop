// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Hero from "./components/Hero";
// import BrandStory from "./components/BrandStory";
// import FavoritesAndCatalog from "./components/FavoritesAndCatalog";
// import CustomAndConsultation from "./components/CustomAndConsultation";
// import GiftCertificate from "./components/GiftCertificate";
// import Reviews from "./components/Reviews";
// import CatalogPage from "./components/CatalogPage";
// import Header from "./components/Header";
// import ProductPage from "./components/ProductPage";
// import FAQ from "./components/FAQ";
// import CartPage from "./components/CartPage";
// import "./App.css";

// function HomePage() {
//   return (
//     <>
//       <Header />
//       <CartPage />
//       <Hero />
//       <BrandStory />
//       <FavoritesAndCatalog />
//       <CustomAndConsultation />
//       <GiftCertificate />
//       <Reviews />
//       <FAQ />
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />

//         <Route
//           path="/catalog"
//           element={
//             <>
//               <Header />
//               <CatalogPage />
//             </>
//           }
//         />

//         <Route
//           path="/product/:id"
//           element={
//             <>
//               <Header />
//               <ProductPage />
//             </>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import FavoritesAndCatalog from "./components/FavoritesAndCatalog";
import CustomAndConsultation from "./components/CustomAndConsultation";
import GiftCertificate from "./components/GiftCertificate";
import Reviews from "./components/Reviews";
import CatalogPage from "./components/CatalogPage";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import FAQ from "./components/FAQ";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import CreateBagPage from "./components/CreateBagPage";
import Contacts from "./components/Contacts";
import "./App.css";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BrandStory />
      <FavoritesAndCatalog />
      <CustomAndConsultation />
      <GiftCertificate />
      <Reviews />
      <FAQ />
      <Contacts/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Главная */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Каталог */}
        <Route
          path="/catalog"
          element={
            <>
              <Header />
              <CatalogPage />
            </>
          }
        />

        {/* Карточка товара */}
        <Route
          path="/product/:id"
          element={
            <>
              <Header />
              <ProductPage />
            </>
          }
        />
    

        {/* Корзина */}
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartPage />
            </>
          }
        />
        <Route
  path="/create-bag"
  element={
    <>
      <Header />
      <CreateBagPage />
    </>
  }
/>
        <Route
  path="/checkout"
  element={
    <>
      <Header />
      <CheckoutPage />
    </>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;