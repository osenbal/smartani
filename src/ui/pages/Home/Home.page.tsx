import React from 'react';
import AppButton from '@/ui/components/AppButton';
import CardLand from '@/ui/components/Card/CardLand';
import { useHomeViewModel } from './Home.viewModel';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const {
    handleWatering,
    suggestion,
    isWatering,
    user,
    myGardens,
    handleChangeCategoryGarden,
    selectedIdCategoryGarden,
    myLands,
  } = useHomeViewModel();
  const navigate = useNavigate();

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
        {myGardens.map((garden) => (
          <AppButton
            key={garden.id}
            colorType="secondary"
            containerClassName="text-ellipsis overflow-hidden truncate max-w-[8rem]"
            className={twMerge(
              'px-4 py-2 rounded-full ',
              selectedIdCategoryGarden === garden.id
                ? ''
                : 'bg-white text-main-darkPurrple  hover:bg-main-darkOrange/70  hover:text-white'
            )}
            onClick={() => {
              handleChangeCategoryGarden(garden.id);
            }}
            style={{ minWidth: 'fit-content' }}
          >
            <span>{garden.name}</span>
          </AppButton>
        ))}
      </div>

      <div className="px-5">
        <div className="flex flex-col gap-4">
          {myLands.length > 0 &&
            myLands.map((land, index) => (
              <CardLand
                key={land.id}
                isFlush={index == 0 && isWatering}
                onFlush={() => {
                  if (index == 0) {
                    handleWatering();
                  }
                }}
                landId={land.id}
                landImage={land.imageUrl}
                landName={land.name}
                landSize={`${land.wide}m x ${land.length}m`}
                suggestion={suggestion || '-'}
              />
            ))}
        </div>

        <div
          onClick={() => {
            if (selectedIdCategoryGarden == null) {
              navigate('/kebun');
              return;
            }
            navigate('/tambah-lahan/' + selectedIdCategoryGarden);
          }}
          className="flex flex-col bg-white rounded-md w-1/2 px-9 py-10 my-4 cursor-pointer hover:bg-slate-200 transition-all duration-150 ease-in-out"
        >
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
