import { useEffect } from "react";
import { useGetWidth } from "./hooks/useGetWidth";
import { Loader1 } from "./loaders/loader1";
import { Portfolio } from "./pages/Portfolio";
import { ThemeProvider } from "./pages/Portfolio/context/theme";

const App = () => {
  const width = useGetWidth({ id: 'app' });

  useEffect(() => {
    const app = document.querySelector('.app');
    app.style.width = `${width}px`;
  }, [width]);

  return (
    <ThemeProvider>
      <div className="app">
        <Portfolio onLoading={() => <Loader1 />} />
      </div>
    </ThemeProvider>
  );
};

export default App;
