import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import ProductsAdmin from "./pages/ProductsAdmin";
import AddProduct from "./pages/AddProduct";

function AppContent() {
  const location = useLocation();  // Gets the current location of the page

  // Conditioning the rendering of the Header and Footer
  const isAdminRoute = location.pathname.startsWith('/admin');  // Checks if it's on the admin routes

  return (
    <>
      {/* Render Header and Footer only when not on admin routes */}
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Category />} />
        <Route path="/womens" element={<Category />} />
        <Route path="/kids" element={<Category />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart-page" element={<Cart />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<ProductsAdmin />} />
        <Route path="/admin/products/add-product" element={<AddProduct />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <main className="bg-gray-50">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </main>
  );
}
