import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test3 = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [num, setNum] = useState(1);

  useEffect(() => {
    getData();
  }, [num]);

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setData(res.data);
      });
  };
  const click1 = () => {
    setNum(id);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={click1}>확인</button>
      <h2>
        값 : {data.id} / {data.title}
      </h2>
    </div>
  );
};

export default Test3;
