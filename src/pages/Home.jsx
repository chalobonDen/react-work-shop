import Count from '../components/Count';
import InputText from '../components/InputText';
import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const todos = useStoreState((state) => state.todos);

  function handlerPlus() {
    setCount(count + 1);
  }

  function handlerMinus() {
    setCount(count - 1);
  }

  const inputText = (e) => {
    const value = e.target.value;
    setName(value);
  };
  return (
    <div className="App">
      <Count
        total={count}
        handlerPlus={() => handlerPlus()}
        handlerMinus={() => handlerMinus()}
      />
      <div className="text-center">{name}</div>
      <InputText inputText={inputText} />
      <div className="text-center uppercase txt-red">Hello world</div>

      {todos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
    </div>
  );
}
