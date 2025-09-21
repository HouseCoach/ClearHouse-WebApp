import { useState } from 'react';
import tempHomeImg from '../assets/Map/temp-home-img.png';
import emptyHeart from '../assets/Home/empty-heart.png';
import fullHeart from '../assets/Home/full-heart.png';
const TEMP_HOME = [
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 1,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 2,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 3,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 4,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 5,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 6,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 7,
  },
];

export default function Home() {
  const [favorites, setFavorites] = useState({});
  const toggleFav = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div>
      {TEMP_HOME.map((item) => (
        <button className="shrink-0 flex w-[327px] items-center gap-[12px] py-[6px] border-b-[1px] border-[#dde3e9]">
          <div className="relative">
            <img src={item.image} alt="image" className="w-[140px] h-[100px]" />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFav(item.id);
              }}
              className="w-[29px] h-[29px] rounded-[50%] bg-[#ffffffbb] absolute bottom-2 right-2 flex justify-center items-center"
            >
              <img
                src={favorites[item.id] ? fullHeart : emptyHeart}
                alt="heart"
                className="w-[16px] h-[16px]"
              />
            </button>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h1 className="text-[14px] font-normal">
              {item.propertyType} {item.price}
            </h1>
            <div className="text-[10px] font-light flex flex-col items-start text-[#666666]">
              <p>
                {item.floor}층 {item.area}㎡
              </p>
              <p>{item.location}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
