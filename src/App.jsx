import "./App.css";

import HookUseState from "./Hooks/HookUseState";
import TodoList from "./Hooks/TodoList";
function App() {
  return (
    <>
      <h2 style={{ color: "aliceblue", fontFamily: "calibri " }}>
        TODO LIST USING USESTATE HOOK
      </h2>
      <TodoList />
    </>
  );
}

export default App;
