import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/root";
import UncontrolledComponentsForm from "./routes/uncontrolled-components";
import ReactHookForm from "./routes/react-hook-form";
import { Provider } from "react-redux";
import { store } from "@configs/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/uncontrolled-components-form",
    element: <UncontrolledComponentsForm />,
  },
  {
    path: "/react-hook-form",
    element: <ReactHookForm />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
