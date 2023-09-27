import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Navbar';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    }
  ]);

  return (
    <>
      <RouterProvider value={router} />
      <Nav />
    </>
  )
}

export default App
