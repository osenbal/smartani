import LandRepository from '@/data/repository/land.repository';

export const useLand = () => {
  const repository = LandRepository.getInstance();

  const getMyLandsByCategoryId = async (id: number) => {
    const response = await repository.getLandsByCategpryGarden(id);
    return response;
  };

  const getLandById = async (id: number) => {
    const response = await repository.getLandById(id);
    return response;
  };

  const handleAddLand = async (
    image: File,
    name: string,
    wide: number,
    length: number,
    location: string,
    categoryGardenId: number
  ) => {
    const response = await repository.addLand(
      image,
      name,
      wide,
      length,
      location,
      categoryGardenId
    );
    return response;
  };

  return {
    handleAddLand,
    getMyLandsByCategoryId,
    getLandById,
  };
};
