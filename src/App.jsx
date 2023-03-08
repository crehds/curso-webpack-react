import { useEffect } from "react";
import { useGetWidth } from "./hooks/useGetWidth";
import { Loader1 } from "./loaders/loader1";
import { Portfolio } from "./pages/Portfolio";
import { ThemeProvider } from "./pages/Portfolio/context/theme";

const App = () => {
  const width = useGetWidth({ id: 'app' });

  useEffect(() => {
    const app = document.querySelector('.portfolio');
    app.style.minWidth = `${width}px`;
  }, [width]);

  return (
    <ThemeProvider>
      <Portfolio onLoading={() => <Loader1 />} />
    </ThemeProvider>
  );
};

export default App;
