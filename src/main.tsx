import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import AboutPage from "./app/about/page"
import CoursesPage from "./app/courses/page"
import CourseDetail from "./app/courses/CourseDetail"
import ReviewsPage from "./app/reviews/page"
import ContactPage from "./app/contact/page"
import { MobileNav } from "./components/mobile-nav"
import "./app/globals.css"
import { ScrollToTop } from "./components/scroll-to-top"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
     <BrowserRouter basename="/sportsmindmastered">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* ✅ Global Mobile Nav visible on all pages */}
        <MobileNav />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
