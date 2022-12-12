import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
 
 
 
import styles from './styles/app.css'

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />            
      </head>
      <body className="h-screen">  
        <Navbar/>   
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

      </body>
      <Footer/>
    </html>
  );
}

