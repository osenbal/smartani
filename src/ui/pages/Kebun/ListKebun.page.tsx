const ListKebun = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-white px-6 py-9">
        <h2 className="text-xl font-mendium">List Kebun</h2>

        <img className="w-16 h-16" src="/smartani-logo.png" alt="smartani" />
      </div>

      <div className="mt-[45px] px-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center px-7 py-16 rounded-md bg-white">
            <p>Kebun kangkung</p>
          </div>
          <div className="flex justify-center items-center px-7 py-16 rounded-md bg-white">
            <p>Kebun kangkung</p>
          </div>
          <div className="flex justify-center items-center px-7 py-16 rounded-md bg-white">
            <p>Kebun kangkung</p>
          </div>
          <div className="flex justify-center items-center px-7 py-16 rounded-md bg-white">
            <p>Kebun kangkung</p>
          </div>

          <div className="relative flex flex-col justify-center items-center gap-y-2 bg-white  py-10">
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
    </div>
  );
};

export default ListKebun;
