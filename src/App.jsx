import { useGetWidth } from "./hooks/useGetWidth";
import { Loader1 } from "./loaders/loader1";
import { Portfolio } from "./pages/Portfolio";
import { LocationProvider } from "./pages/Portfolio/context/location";
import { ThemeProvider } from "./pages/Portfolio/context/theme";

const App = () => {
  useGetWidth({ id: 'app' });

  return (
    <ThemeProvider>
      <LocationProvider>
        <Portfolio onLoading={() => <Loader1 />} />
      </LocationProvider>
    </ThemeProvider>
  );
};

export default App;
