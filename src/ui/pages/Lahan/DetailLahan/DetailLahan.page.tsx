import ToggleSwitch from '@/ui/components/Form/ToggleSwitch';
import { useState } from 'react';

const DetailLahanPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="relative pb-[210px]">
        <img
          className="w-full h-[240px] object-cover absolute"
          src="/images/thumb/thumb_garden.png"
          alt="garden"
        />

        <div className="flex flex-row items-center gap-x-2 absolute top-0 right-0 bg-[#EBEBEB] p-2 rounded-bl-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2 2.4C2 2.29391 2.04214 2.19217 2.11716 2.11716C2.19217 2.04214 2.29391 2 2.4 2H13.6C13.7061 2 13.8078 2.04214 13.8828 2.11716C13.9579 2.19217 14 2.29391 14 2.4V11.6C14 11.6525 13.9897 11.7045 13.9696 11.7531C13.9495 11.8016 13.92 11.8457 13.8828 11.8828C13.8457 11.92 13.8016 11.9495 13.7531 11.9696C13.7045 11.9897 13.6525 12 13.6 12H10.84C10.7853 11.9999 10.7312 12.0111 10.6809 12.0327C10.6307 12.0544 10.5855 12.0861 10.548 12.126L8.29133 14.524C8.25393 14.5638 8.20879 14.5954 8.15869 14.6171C8.10859 14.6387 8.05458 14.6499 8 14.6499C7.94542 14.6499 7.89141 14.6387 7.84131 14.6171C7.79121 14.5954 7.74607 14.5638 7.70867 14.524L5.452 12.126C5.41453 12.0861 5.36928 12.0544 5.31906 12.0327C5.26884 12.0111 5.2147 11.9999 5.16 12H2.4C2.29391 12 2.19217 11.9579 2.11716 11.8828C2.04214 11.8078 2 11.7061 2 11.6V2.4Z"
              stroke="#DB5B23"
              strokeWidth="1.5"
            />
            <path
              d="M7.99999 4.66667L8.95 6.38334L10.6667 7.33334L8.95 8.28334L7.99999 10L7.04999 8.28334L5.33333 7.33334L7.04999 6.38334L7.99999 4.66667Z"
              stroke="#DB5B23"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Yuk siram tanaman mu!</p>
        </div>
      </div>

      <div className="rounded-2xl bg-[#F5F5F5]  z-10 relative px-6 py-8">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col">
            <p className="text-subTitle2">Lahan 1 dari barat</p>
            <span className="text-body2Regular">ukuran 10mx10m</span>
          </div>

          <ToggleSwitch
            id="toggle-switch"
            name="toggle-switch"
            checked={toggle}
            onChange={() => {
              setToggle(!toggle);
            }}
            className="mt-2"
            labelPosition="left"
            label="siram ?"
          />
        </div>

        <div className="flex flex-row justify-center items-center bg-white mt-[54px] py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="92"
            viewBox="0 0 92 92"
            fill="none"
          >
            <path
              d="M47.6387 10.8028C47.4363 10.5664 47.1851 10.3766 46.9024 10.2465C46.6197 10.1164 46.3121 10.049 46.0009 10.049C45.6897 10.049 45.3821 10.1164 45.0994 10.2465C44.8167 10.3766 44.5655 10.5664 44.363 10.8028C38.6741 17.4566 20.125 40.4602 20.125 57.5C20.125 73.379 30.1228 83.375 46 83.375C61.8772 83.375 71.875 73.379 71.875 57.5C71.875 40.4602 53.3259 17.4566 47.6387 10.8028ZM48.875 74.0312C48.5296 74.032 48.1892 73.9498 47.8822 73.7915C47.5752 73.6333 47.3108 73.4036 47.1111 73.1218C46.9114 72.8401 46.7823 72.5145 46.7346 72.1724C46.687 71.8304 46.7222 71.4819 46.8373 71.1562C46.9844 70.7314 47.2617 70.3638 47.6298 70.1057C47.9979 69.8476 48.4381 69.7122 48.8876 69.7188C51.7417 69.7126 54.4772 68.576 56.4954 66.5579C58.5135 64.5397 59.6501 61.8042 59.6562 58.9501C59.6497 58.5006 59.7851 58.0604 60.0432 57.6923C60.3013 57.3242 60.6689 57.0469 61.0938 56.8998C61.4194 56.7847 61.7679 56.7495 62.1099 56.7971C62.452 56.8448 62.7776 56.9739 63.0593 57.1736C63.3411 57.3733 63.5708 57.6377 63.729 57.9447C63.8873 58.2517 63.9695 58.5921 63.9688 58.9375C63.9645 62.9393 62.3729 66.776 59.5432 69.6057C56.7135 72.4354 52.8768 74.027 48.875 74.0312Z"
              fill="#85B6FF"
            />
          </svg>
          <div className="flex flex-col gap-y-1">
            <p className="font-semibold text-sm">Kelembapan tanah</p>
            <span className="font-semibold text-3xl">80 Rh</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLahanPage;
