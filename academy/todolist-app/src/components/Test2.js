import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    getData();
  }, [id]);
  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <h2>
        데이터 출력: {data.id} / {data.title}
      </h2>
    </div>
  );
};

export default Test2;
