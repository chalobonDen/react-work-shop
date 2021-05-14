import { useStoreState, useStoreActions } from 'easy-peasy';

export default function TodoList() {
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.addTodo);

  const handleAddTodo = () => {
    const now = Date.now();
    addTodo(now);
  };

  return (
    <div>
      {todos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
      <button className="border-2" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}
