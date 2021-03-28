import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test5 = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData();
  }, [text]);
  const getData = () => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${text}`)
      .then((res) => {
        setData(res.data.hits);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError('데이터를 찾을 수 없습니다.');
      });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ul>
        {data && loading
          ? '로딩중...'
          : data.map((item) => <li key={item.objectID}>{item.title}</li>)}
      </ul>
      <p>{error ? error : null}</p>
    </div>
  );
};

export default Test5;
