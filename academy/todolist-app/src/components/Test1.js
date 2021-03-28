import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData4();
  }, []);

  const getData1 = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      setData(response.data);
    });
  };

  const getData2 = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setData(res.data);
  };

  const getData3 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const getData4 = async () => {
    const res = fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await (await res).json();
    setData(data);
  };

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>
          {item.id} / {item.title}
        </p>
      ))}
    </div>
  );
};

export default Test1;

/*
[외부데이터 가져오기]
1. fetch 설치 불필요
2. axios 설치 필요
    - yarn add axios
    - axios
        .get('url')
        //완료 후
        .then((response) => {
            setData(response.data);
        });
*/
