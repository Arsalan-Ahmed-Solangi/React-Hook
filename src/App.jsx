import "./App.css";

import useFetch from "./Hooks/useCustomHook";

function App() {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div> { JSON.stringify(data)  } </div>;
}

export default App;
