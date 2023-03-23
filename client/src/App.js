import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddTodo from "./pages/AddTodo";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ViewTodoList from "./pages/ViewTodoList";
import Navbar from "./views/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<SignupForm />} />
        <Route exact path="/add-todo" element={<AddTodo />} />
        <Route exact path="/" element={<ViewTodoList />} />
      </Routes>
    </div>
  );
}

export default App;
