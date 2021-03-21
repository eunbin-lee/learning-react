import React from 'react';
import {
  AiOutlineVideoCamera,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineDash,
  AiOutlineHeart,
} from 'react-icons/ai';
import numeral from 'numeral';

const MelonItem = ({ item, onLike, onFind }) => {
  const { rank, poster, title, singer, like, state, done } = item;
  return (
    <tr>
      <td>{rank}</td>
      <td>
        <img src={poster} alt={title} width="50" />
        {title}
      </td>
      <td>{singer}</td>
      <td>
        <i style={{ fontSize: '1.175rem' }} onClick={() => onLike(rank)}>
          {done ? (
            <AiOutlineHeart color="red" />
          ) : (
            <AiOutlineHeart color="#555" />
          )}
        </i>{' '}
        {numeral(like).format(0, 0)}
      </td>
      <td>
        <i style={{ fontSize: '1.5rem' }} onClick={() => onFind(rank)}>
          <AiOutlineVideoCamera />
        </i>
      </td>
      <td>
        {state === '상승' && <AiOutlineArrowUp color="tomato" />}
        {state === '하락' && <AiOutlineArrowDown color="blue" />}
        {state === '유지' && <AiOutlineDash color="#555" />}
      </td>
    </tr>
  );
};

export default MelonItem;
