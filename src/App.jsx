import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from './pages/jobs'
import JobDetails, { JobDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />

        {/* Nested contact routes */}
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout/>} errorElement={<Error/>}>
          <Route index element={<Jobs/>} loader={jobsLoader}/>
          <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
