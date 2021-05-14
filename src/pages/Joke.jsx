import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Joke() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingName, setLoadingName] = useState(true);
  const [getJoke, setJoke] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [getJokeName, setJokeName] = useState(null);

  useEffect(() => {
    getApiJoke();
  }, []);

  useEffect(() => {
    getApiName();
  }, [firstName, lastName]);

  const getApiJoke = async () => {
    const res = await axios.get('http://api.icndb.com/jokes/random');
    // console.log('response', res);
    setJoke(res.data.value.joke);
    setLoading(false);
  };

  //   Method Get
  //   const getApiName = async () => {
  //     setLoadingName(true);
  //     const res = await axios.get(
  //       `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  //     );
  //     console.log('response', res);
  //     setJokeName(res.data.value.joke);
  //     setLoadingName(false);
  //   };

  // Method Post
  const getApiName = async () => {
    setLoadingName(true);
    const postData = {
      firstName: firstName,
      lastName: lastName,
    };
    const res = await axios.post(`https://reqres.in/api/users`, postData);
    const data = res.data;
    console.log('response:', data);
    const fullName = `FullName: ${data.firstName} ${data.lastName}, ID: ${data.id}, Create : ${data.createdAt}`;
    setJokeName(fullName);
    setLoadingName(false);
  };

  const GetJokeComponent = () => {
    return (
      <div>
        {/* Chunk Norris */}
        {getJoke}
      </div>
    );
  };

  const GetJokeName = () => {
    return <div>{getJokeName}</div>;
  };

  return (
    <div>
      {isLoading ? 'loading' : <GetJokeComponent />}
      <button className="border-2" onClick={getApiJoke}>
        Refetch
      </button>
      <p>
        First name :
        <input
          className="border-2"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </p>
      <p>
        Last name :
        <input
          className="border-2"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
      </p>
      <button className="border-2" onClick={getApiName}>
        Get Name
      </button>

      {isLoadingName ? 'loading' : <GetJokeName />}
    </div>
  );
}
