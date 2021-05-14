import { useState } from 'react';
import { TodoHeader } from '../components/Todo/Header';
import ListTodo from '../components/Todo/ListTodo';

export default function Todo() {
  const [listTodo, setListTodo] = useState([]);
  const [todo, setTodo] = useState('');
  const [btnType, setBtnType] = useState('all');

  const handlerInputTodo = (e) => {
    const value = e.target.value;
    setTodo(value);
  };

  const handleAdd = () => {
    const id = Date.now();
    const newList = [
      ...listTodo,
      {
        id: id,
        name: todo,
        completed: false,
      },
    ];
    setListTodo(newList);
    setTodo('');
  };

  const handleCheck = (id) => {
    const newList = listTodo.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          ...{ completed: !x.completed },
        };
      }
      return x;
    });
    setListTodo(newList);
  };

  const handleAll = () => {
    setBtnType('all');
  };

  const handleActive = () => {
    setBtnType('active');
  };

  const handleCompleted = () => {
    setBtnType('completed');
  };

  return (
    <div className="text-center">
      <TodoHeader />
      <input className="border-2" onChange={handlerInputTodo} value={todo} />
      <button
        onClick={handleAdd}
        className="inline-block bg-transparent hover:bg-indigo-300 
        text-indigo-400 hover:text-white px-4 border 
        border-indigo-400 hover:border-transparent rounded"
      >
        Add
      </button>
      <br />
      <div className="m-3.5 justify-items-start md:justify-items-center space-x-3">
        <button
          className="inline-block bg-transparent hover:bg-indigo-300 
          text-indigo-400 hover:text-white py-2 px-4 border 
          border-indigo-400 hover:border-transparent rounded"
          onClick={handleAll}
        >
          All
        </button>
        <button
          className="inline-block bg-transparent hover:bg-indigo-300 
          text-indigo-400 hover:text-white py-2 px-4 border 
          border-indigo-400 hover:border-transparent rounded"
          onClick={handleActive}
        >
          active
        </button>
        <button
          className="inline-block bg-transparent hover:bg-indigo-300 
          text-indigo-400 hover:text-white py-2 px-4 border 
          border-indigo-400 hover:border-transparent rounded"
          onClick={handleCompleted}
        >
          completed
        </button>
      </div>

      <div>
        {listTodo.map((x, id) => {
          if (btnType === 'active') {
            if (x.completed === false) {
              return (
                <li key={id}>
                  <ListTodo data={x} handleCheck={() => handleCheck(x.id)} />
                </li>
              );
            }
          } else if (btnType === 'completed') {
            if (x.completed === true) {
              return (
                <li key={id}>
                  <ListTodo data={x} handleCheck={() => handleCheck(x.id)} />
                </li>
              );
            }
          } else {
            return (
              <li key={id}>
                <ListTodo data={x} handleCheck={() => handleCheck(x.id)} />
              </li>
            );
          }
        })}
      </div>
    </div>
  );
}
