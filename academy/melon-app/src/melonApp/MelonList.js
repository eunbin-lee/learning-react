import React from 'react';
import MelonItem from './MelonItem';
import './MelonList.css';

const MelonList = ({ filterData, onLike, onFind }) => {
  return (
    <div className="MelonList">
      <table>
        <caption>멜론차트</caption>
        <colgroup>
          <col className="w1" />
          <col className="w2" />
          <col className="w3" />
          <col className="w4" />
          <col className="w5" />
          <col className="w6" />
        </colgroup>
        <thead>
          <tr>
            <th>순위</th>
            <th>곡정보</th>
            <th>가수</th>
            <th>좋아요</th>
            <th>뮤비</th>
            <th>상승/하락</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <MelonItem
              key={item.rank}
              item={item}
              onLike={onLike}
              onFind={onFind}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MelonList;
