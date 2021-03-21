import React, { useEffect, useState } from 'react';
import '../utils/css/reset.css';
import './Melon.css';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import MelonModal from './MelonModal';

const Melon = () => {
  const initialData = [
    {
      rank: 1,
      title: 'Blueming',
      singer: '아이유 (IU)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',
      state: '유지',
      id: 0,
      key: 'D1PvIWdJ8xo',
      like: 103306,
      done: false,
    },
    {
      rank: 2,
      title: '늦은 밤 너의 집 앞 골목길에서',
      singer: '노을',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/302/841/81302841_1573114099166_1_140x140.JPG',
      state: '상승',
      id: 0,
      key: '3gaLOtoSs40',
      like: 361905,
      done: false,
    },
    {
      rank: 3,
      title: 'unlucky',
      singer: '아이유 (IU)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',
      state: '상승',
      id: 0,
      key: 'l5Rb1pNre40',
      like: 103306,
      done: false,
    },
    {
      rank: 4,
      title: '시간의 바깥',
      singer: '아이유 (IU)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',
      state: '상승',
      id: 0,
      key: 'R3Fwdnij49o',
      like: 84933,
      done: false,
    },
    {
      rank: 5,
      title: 'Love poem',
      singer: '아이유 (IU)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',
      state: '유지',
      id: 0,
      key: 'OcVmaIlHZ1o',
      like: 103306,
      done: false,
    },
    {
      rank: 6,
      title: 'HIP',
      singer: '마마무(Mamamoo)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/309/776/81309776_1573713705694_1_140x140.JPG',
      state: '하락',
      id: 0,
      key: 'F4tMI_XcqQ0',
      like: 80257,
      done: false,
    },
    {
      rank: 7,
      title: '그 사람',
      singer: '아이유 (IU)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',
      state: '유지',
      id: 0,
      key: 'yuOMAvrGtxs',
      like: 103306,
      done: false,
    },
    {
      rank: 8,
      title: '이 번호로 전화해줘',
      singer: '바이브',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/305/010/81305010_1574148594739_1_140x140.JPG',
      state: '하락',
      id: 0,
      key: 'v7oRIb31DQQ',
      like: 103306,
      done: false,
    },
    {
      rank: 9,
      title: '자장가',
      singer: '아이유 (IU)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',
      state: '하락',
      id: 0,
      key: 'pNjw3BvwIeU',
      like: 103306,
      done: false,
    },
    {
      rank: 10,
      title: '어떻게 이별까지 사랑하겠어, 널 사랑하는 거지',
      singer: 'AKMU (악동뮤지션)',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/271/853/81271853_1569396403906_1_140x140.JPG',
      state: '유지',
      id: 0,
      key: 'mZz9uYdj_v4',
      like: 103306,
      done: false,
    },
    {
      rank: 11,
      title: '흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',
      singer: '장범준',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/260/027/81260027_1566538606488_1_140x140.JPG',
      state: '유지',
      id: 0,
      key: '689GoEBjMhY',
      like: 103306,
      done: false,
    },
    {
      rank: 12,
      title: '새 사랑',
      singer: '송하예',
      poster:
        '//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/280/600/81280600_1570782050116_1_140x140.JPG',
      state: '유지',
      id: 0,
      key: 't1H-Kw-7PGE',
      like: 103306,
      done: false,
    },
  ];

  const [data, setData] = useState(initialData);
  const [filterData, setFilterData] = useState([]);
  const [findData, setFindData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const nowDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const txtDate = `${year}.${month}.${date}`;
    return txtDate;
  };

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const onSearch = (text) => {
    const searchText = data.filter((item) => {
      const reg = new RegExp(text, 'ig');
      return item.title.match(reg);
    });
    setFilterData(searchText);
  };

  const onLike = (rank) => {
    const newData = data.map((item) =>
      item.rank === rank
        ? { ...item, done: true, like: item.like + 1 }
        : { ...item, done: false },
    );
    setData(newData);
  };

  const onFind = (rank) => {
    setIsOpen(true);
    const newData = data.find((item) => item.rank === rank);
    setFindData(newData);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="Melon">
      <h2>Melon {nowDate()} 인기차트</h2>
      <MelonForm onSearch={onSearch} />
      <MelonList filterData={filterData} onLike={onLike} onFind={onFind} />
      {isOpen && (
        <MelonModal findData={findData} isOpen={isOpen} onClose={onClose} />
      )}
    </div>
  );
};

export default Melon;
