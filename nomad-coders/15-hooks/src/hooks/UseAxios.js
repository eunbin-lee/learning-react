import React, { useEffect, useState } from 'react';
import defaultAxios from 'axios'; //npx install axios, yarn add axios

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  //   if (!opts.url) {
  //     return;
  //   }

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  return (
    <div>
      <h3>{data && data.status}</h3>
      <h3>{loading && 'Loading'}</h3>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
