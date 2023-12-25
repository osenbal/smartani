import React, { useEffect } from 'react';
import { useState } from 'react';
import AppButton from '@/ui/components/AppButton';
import ToggleSwitch from '@/ui/components/Form/ToggleSwitch';
import { Link } from 'react-router-dom';
import { onValue } from 'firebase/database';
import { useContextAuth } from '@/hooks/useContextAuth';
import { dbRefMoisture, dbRefUserSuggestion } from '@/data/firebaseApp';

const HomePage: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [_, setMoisture] = useState<number>(0);
  const [suggestion, setSuggestion] = useState<string>('');
  const { user } = useContextAuth();

  useEffect(() => {
    const uid = user?.uid;

    if (uid != null) {
      console.log(uid);
      onValue(dbRefMoisture(uid), (snapshot) => {
        const data = snapshot.val();
        if (!!data) {
          setMoisture(data);
        }
      });

      onValue(dbRefUserSuggestion(uid), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (!!data) {
          setSuggestion(data);
        }
      });
    }
  }, []);

  return (
    <>
      <div className="flex justify-between gap-3 px-5 pt-4">
        <div className="flex flex-col">
          <p>
            <span className="text-lg font-medium">Hi,</span>{' '}
            <span className="text-subTitle2">
              {user?.displayName || user?.email}
            </span>
          </p>
          <p className="text-sm text-appDarkGray">
            What do you want to learn today?
          </p>
        </div>

        <img
          src="./images/thumb/thumb_profile.png"
          alt="profile"
          className="rounded-full w-11 h-11"
        />
      </div>
      <div className="flex flex-row flex-nowrap overflow-x-auto pb-1 my-8 gap-x-3 ps-5">
        <AppButton
          colorType="secondary"
          className="px-4 py-2 rounded-full hover:bg-main-darkOrange/70 "
          onClick={() => {}}
          style={{ minWidth: 'fit-content' }}
        >
          <span>Kebun bayam</span>
        </AppButton>

        <AppButton
          colorType="secondary"
          className="px-4 py-2 rounded-full bg-white text-main-darkPurrple hover:bg-main-darkOrange/70  hover:text-white"
          onClick={() => {}}
          style={{ minWidth: 'fit-content' }}
        >
          <span>Kebun kopi</span>
        </AppButton>
        <AppButton
          colorType="secondary"
          className="px-4 py-2 rounded-full bg-white text-main-darkPurrple hover:bg-main-darkOrange/70  hover:text-white"
          onClick={() => {}}
          style={{ minWidth: 'fit-content' }}
        >
          <span>Kebun kopi</span>
        </AppButton>

        <AppButton
          colorType="secondary"
          className="px-4 py-2 rounded-full bg-white text-main-darkPurrple hover:bg-main-darkOrange/70  hover:text-white"
          onClick={() => {}}
          style={{ minWidth: 'fit-content' }}
        >
          <span>Kebun garam</span>
        </AppButton>

        <AppButton
          colorType="secondary"
          className="px-4 py-2 rounded-full bg-white text-main-darkPurrple hover:bg-main-darkOrange/70  hover:text-white"
          onClick={() => {}}
          style={{ minWidth: 'fit-content' }}
        >
          <span>Kebun ganja</span>
        </AppButton>

        <AppButton
          colorType="secondary"
          className="px-4 py-2 rounded-full bg-white text-main-darkPurrple  hover:bg-main-darkOrange/70  hover:text-white"
          onClick={() => {}}
          style={{ minWidth: 'fit-content' }}
        >
          <span>Kebun ganjar</span>
        </AppButton>
      </div>

      <div className="px-5">
        <div className="flex flex-col bg-white rounded-md">
          <div className="relative">
            <img
              src="/images/thumb/thumb_garden.png"
              alt="kebun"
              className="h-[124px] w-full"
              style={{ objectFit: 'cover' }}
            />

            <div className="flex flex-row items-center gap-x-2 absolute bottom-0 bg-[#EBEBEB] p-2 rounded-tr-lg">
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
              <p>{suggestion}</p>
            </div>
          </div>

          <div className="px-2 py-5">
            <Link
              to={'/lahan/1'}
              className="text-black hover:text-black hover:opacity-80"
            >
              <p>Lahan 1 dari barat</p>
              <p>10x10</p>
            </Link>

            <div className="flex flex-row justify-end">
              <ToggleSwitch
                id="toggle-switch"
                name="toggle-switch"
                checked={toggle}
                onChange={() => {
                  setToggle(!toggle);
                }}
                className="mt-2"
                labelPosition="left"
                label="siram tanaman ?"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-md w-1/2 px-9 py-10 my-4 ">
          <div className="relative flex flex-col justify-center items-center gap-y-2">
            <div className="p-5 bg-[#F6F9FE] flex items-center justify-center rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 3.33334V12.6667"
                  stroke="#034221"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33333 8H12.6667"
                  stroke="#034221"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{' '}
            </div>
            <p className="text-center">Tambah Lahan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
