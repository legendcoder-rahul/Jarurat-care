import Home from './pages/Home'
import About from './pages/About'
import Patient from './pages/Patient'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "patient",
    element: <Patient />,
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
