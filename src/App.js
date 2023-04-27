import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackBarProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
