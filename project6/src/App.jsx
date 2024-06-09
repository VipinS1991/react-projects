
import Dashboard from "./pages/Dashboard/Dashboard"
import TransactionPage from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  }
]);


function App() {
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
