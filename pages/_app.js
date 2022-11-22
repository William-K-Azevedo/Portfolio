import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
