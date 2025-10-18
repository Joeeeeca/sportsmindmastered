import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import AboutPage from "./app/about/page"
import CoursesPage from "./app/courses/page"
import CourseDetail from "./app/courses/CourseDetail"   // ✅ NEW IMPORT
import ReviewsPage from "./app/reviews/page"
import ContactPage from "./app/contact/page"
import "./app/globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/sportsmindmastered">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetail />} /> {/* ✅ NEW ROUTE */}
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
