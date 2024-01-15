import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppInput from '@/ui/components/Form/AppInput';
import AppButton from '@/ui/components/AppButton';
import { useLand } from '@/hooks/land/useLand';

const TambahLahanPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { handleAddLand } = useLand();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create a temporary URL for the selected file and set it as the image preview
      const temporaryUrl = URL.createObjectURL(file);
      setImageUrl(temporaryUrl);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    const size = data.get('sizeLand') as string;

    // split with x
    const wide = size.split('x')[1];
    const length = size.split('x')[0];

    if (imageFile === null) return alert('Image is required');
    if (categoryId === undefined) return alert('Category is required');

    handleAddLand(
      imageFile,
      data.get('nameLand') as string,
      Number(wide),
      Number(length),
      data.get('locationLand') as string,
      Number(categoryId)
    )
      .then(() => {
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-row gap-4 justify-start items-center bg-white px-3 py-2">
        <div
          onClick={handleBack}
          className="hover:bg-slate-200 rounded-md p-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M14.3083 27.1083C13.9082 27.5082 13.3657 27.7329 12.8 27.7329C12.2343 27.7329 11.6918 27.5082 11.2917 27.1083L1.69173 17.5083C1.2918 17.1082 1.06712 16.5657 1.06712 16C1.06712 15.4343 1.2918 14.8918 1.69173 14.4918L11.2917 4.89177C11.6941 4.50316 12.233 4.28813 12.7923 4.29299C13.3517 4.29786 13.8867 4.52221 14.2823 4.91775C14.6778 5.31329 14.9022 5.84836 14.907 6.40771C14.9119 6.96706 14.6969 7.50595 14.3083 7.9083L8.53333 13.8667L28.8 13.8667C29.3658 13.8667 29.9084 14.0915 30.3085 14.4915C30.7086 14.8916 30.9333 15.4342 30.9333 16C30.9333 16.5658 30.7086 17.1084 30.3085 17.5085C29.9084 17.9086 29.3658 18.1334 28.8 18.1334L8.53333 18.1334L14.3083 24.0918C14.7082 24.4918 14.9329 25.0343 14.9329 25.6C14.9329 26.1657 14.7082 26.7082 14.3083 27.1083Z"
              fill="#4F4F4F"
            />
          </svg>
        </div>

        <span>Tambah Lahan Baru</span>
      </div>

      <div className="flex flex-col px-[25px] my-8">
        <div
          className={`relative flex flex-row w-full h-[205px] bg-[#E4E4E4] justify-center items-center rounded-xl`}
        >
          {imageUrl && (
            <img
              className="w-full h-full object-cover rounded-xl"
              src={imageUrl}
              alt="preview"
            />
          )}
          <label
            htmlFor="imageLand"
            className="absolute  flex items-center justify-center p-5 rounded-full bg-[#DADADA] opacity-[70%] cursor-pointer"
          >
            <input
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
              id="imageLand"
              name="imageLand"
              type="file"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M3.55264 9.13168C3.55264 7.65205 4.14042 6.23303 5.18667 5.18677C6.23293 4.14051 7.65195 3.55273 9.13158 3.55273H25.8684C27.3481 3.55273 28.7671 4.14051 29.8133 5.18677C30.8596 6.23303 31.4474 7.65205 31.4474 9.13168V25.8685C31.4474 27.3482 30.8596 28.7672 29.8133 29.8134C28.7671 30.8597 27.3481 31.4475 25.8684 31.4475H9.13158C7.65195 31.4475 6.23293 30.8597 5.18667 29.8134C4.14042 28.7672 3.55264 27.3482 3.55264 25.8685V9.13168Z"
                stroke="#4F4F4F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6184 16.1055C14.5442 16.1055 16.1053 14.5444 16.1053 12.6187C16.1053 10.6929 14.5442 9.13184 12.6184 9.13184C10.6927 9.13184 9.13158 10.6929 9.13158 12.6187C9.13158 14.5444 10.6927 16.1055 12.6184 16.1055Z"
                stroke="#4F4F4F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.0231 18.3665L9.13158 31.4477H26.0539C27.4844 31.4477 28.8562 30.8795 29.8677 29.868C30.8791 28.8565 31.4474 27.4847 31.4474 26.0543V25.8688C31.4474 25.2188 31.2033 24.9692 30.764 24.488L25.1432 18.3581C24.8812 18.0723 24.5625 17.8443 24.2075 17.6886C23.8525 17.5329 23.469 17.4528 23.0813 17.4536C22.6936 17.4544 22.3104 17.536 21.956 17.6932C21.6016 17.8503 21.2839 18.0796 21.0231 18.3665Z"
                stroke="#4F4F4F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-[25px] flex flex-col gap-4">
        <AppInput
          name="nameLand"
          type="text"
          autoComplete="off"
          labelTop={<span>Nama Lahan</span>}
          iconPlace="left"
          placeholder="Nama lahan"
        />

        <AppInput
          name="sizeLand"
          type="text"
          autoComplete="off"
          labelTop={<span>Ukuran</span>}
          iconPlace="left"
          disabled
          value={'10x10'}
          placeholder="10x10"
        />

        <AppInput
          name="locationLand"
          type="text"
          autoComplete="off"
          labelTop={<span>Lokasi</span>}
          iconPlace="left"
          placeholder="location"
        />

        <AppButton
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          className="w-full h-[64px] rounded-xl"
        >
          <span>Simpan</span>
        </AppButton>
      </form>
    </>
  );
};

export default TambahLahanPage;
