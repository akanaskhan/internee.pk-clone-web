import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./Route.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ThemeContextProvider from "./context/ThemeContext.jsx";
  

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
     <HelmetProvider>

   
     
        <ThemeContextProvider>

      
            <AppRouter />
        
        </ThemeContextProvider>
     
         
    
     </HelmetProvider>
  </QueryClientProvider>
);
