import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

// imports the various components
import Landing from "./components/landingPage/Landing";
import About from "./components/aboutPage/About";
import NavigationBar from "./components/landingPage/NavigationBar";
import RegisterInterest from "./components/landingPage/RegisterInterest";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<NavigationBar />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="register_interest" element={<RegisterInterest />} />
    </Route>
    </>
  )
);

function App() {
  return (
    <div>
	<RouterProvider router={router} />
    </div>
  );
}

export default App;
