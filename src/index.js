import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./app";
import ContextProvider from "./Components/Context/context";

const root = document.getElementById("root")

createRoot(root).render(
    <ContextProvider >
        <App />
    </ContextProvider>
)

