import "./App.css";
import DynamicForm from "./Hooks/DynamicForm";
import FetchApi from "./Hooks/FetchApi";
import Form from "./Hooks/Form";
import HookReducer from "./Hooks/HookReducer";
import HookUseEffect from "./Hooks/HookUseEffect";
import HookUseRef from "./Hooks/HookUseRef";

function App() {
  return (
    <>
      <h2 style={{ color: "aliceblue", fontFamily: "calibri " }}>
        UNCONTROLLED & CONTROLLED FORM
      </h2>
      <HookReducer />
    </>
  );
}

export default App;
