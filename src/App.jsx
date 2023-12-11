import "./App.css";
import store, { LikeCounter } from "./components/LikeCounter";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <LikeCounter />
      </Provider>
    </>
  );
}

export default App;
