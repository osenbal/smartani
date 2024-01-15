import { useState } from 'react';
import { useGarden } from '@/hooks/categoryGarden/useGarden';
import { twMerge } from 'tailwind-merge';
import AppButton from '@/ui/components/AppButton';

const ListKebun = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { gardens, addMyGarden } = useGarden();

  const handleSelectCategory = (id: number) => {
    if (selectedCategory === id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(id);
    }
  };

  const handleAddMyGarden = () => {
    setIsLoading(true);
    if (selectedCategory != null) {
      addMyGarden(selectedCategory)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });

      setSelectedCategory(null);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-white px-6 py-9">
        <h2 className="text-xl font-mendium">List Kebun</h2>

        <img className="w-16 h-16" src="/smartani-logo.png" alt="smartani" />
      </div>

      <div className="mt-[45px] px-6 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {gardens.map((garden, index) => (
            <div
              key={index}
              onClick={() => handleSelectCategory(garden.id)}
              className={twMerge(
                'flex flex-col justify-center gap-3 items-center min-h-[185px] p-4 rounded-md bg-white cursor-pointer transition-all ease-in-out duration-150',
                selectedCategory === garden.id &&
                  'bg-main-darkOrange/50 text-white'
              )}
            >
              <img
                className="w-[85px] h-[85px]"
                src={garden.imageUrl}
                alt={garden.name}
              />
              <p>{garden.name}</p>
            </div>
          ))}
        </div>

        <div className="flex">
          <AppButton
            type="button"
            isLoading={isLoading}
            disabled={selectedCategory === null || isLoading}
            onClick={handleAddMyGarden}
            className="mt-10 w-full h-16 rounded-xl"
            icon={
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.5 5V19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 12H19.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            }
            iconPosition="left"
          >
            <span>Tambah Kebun</span>
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default ListKebun;
