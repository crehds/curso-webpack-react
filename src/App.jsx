import { useGetWidth } from "./hooks/useGetWidth";
import { Loader1 } from "./loaders/loader1";
import { Portfolio } from "./pages/Portfolio";
import { ThemeProvider } from "./pages/Portfolio/context/theme";

const App = () => {
  useGetWidth({ id: 'app' });

  return (
    <ThemeProvider>
      <Portfolio onLoading={() => <Loader1 />} />
    </ThemeProvider>
  );
};

export default App;
