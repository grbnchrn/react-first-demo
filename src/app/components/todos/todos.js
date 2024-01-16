import "./todos.css";

function Todo({ children }) {
  return <li>{children}</li>;
}

export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

export default function TodoContent() {
  return (
    <>
      <p></p>
      <div id="todos">
        <ul>
          {DUMMY_TODOS.map((todo) => (
            <Todo>{todo}</Todo>
          ))}
        </ul>
      </div>
    </>
  );
} 
