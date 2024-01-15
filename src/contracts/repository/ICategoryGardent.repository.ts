import { IResponseApp } from '@/data/ResponseApp';

export interface ICategpryGardenRepository {
  addMyCategoryGarden(id: number): Promise<IResponseApp<void>>;
  getMyCategoryGardens(): Promise<IResponseApp<ICategorieGarden[]>>;
  getMyCategoryGardenById(id: number): Promise<IResponseApp<ICategorieGarden>>;
  deleteMyCategoryGarden(id: number): Promise<IResponseApp<void>>;

  getCategoryGardens(): Promise<IResponseApp<ICategorieGarden[]>>;
}
