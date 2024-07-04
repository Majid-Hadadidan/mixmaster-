import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Cocktail from "./pages/Cocktail";
import NewsLetter from "./pages/NewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "cocktail", element: <Cocktail /> },
      { path: "newsletter", element: <NewsLetter /> },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
