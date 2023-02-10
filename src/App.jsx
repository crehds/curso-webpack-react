import { Loader1 } from "./loaders/loader1";
import { Portfolio } from "./pages/Portfolio";

const App = () => {
  return (
    <Portfolio onLoading={() => <Loader1 />} />
  );
};

export default App;
