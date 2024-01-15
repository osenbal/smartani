import { useEffect, useState } from 'react';
import CategoryGardenRepository from '@/data/repository/categoryGarden.repository';

export const useGarden = () => {
  const [gardens, setGardens] = useState<ICategorieGarden[]>([]);
  const [myGardens, setMyGardens] = useState<ICategorieGarden[]>([]);
  const repository = CategoryGardenRepository.getInstance();

  useEffect(() => {
    getGategoryGardens();
    getMyGardens();
  }, []);

  const getGategoryGardens = async () => {
    const response = await repository.getCategoryGardens();
    setGardens(response?.data || []);
  };

  const getMyGardens = async () => {
    const response = await repository.getMyCategoryGardens();
    setMyGardens(response?.data || []);
  };

  const addMyGarden = async (id: number) => {
    const response = await repository.addMyCategoryGarden(id);
    await getGategoryGardens();
    return response;
  };

  return {
    gardens,
    addMyGarden,
    myGardens,
  };
};
