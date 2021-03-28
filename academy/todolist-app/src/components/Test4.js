import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      //응답 성공
      .then((res) => {
        setPost(res.data);
        setLoading(false);
        setError('');
      })
      //응답 실패
      .catch((error) => {
        setPost({});
        setLoading(true);
        setError('데이터를 찾을 수 없습니다.');
      });
  };

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>데이터를 찾을 수 없습니다.</h2>;
  if (error) return <h2>{error}</h2>;
  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post && loading ? '로딩중' : post.title}</h2>
      <p>{error ? error : null}</p>
    </div>
  );
};

export default Test4;
