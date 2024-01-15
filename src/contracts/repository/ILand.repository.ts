import { IResponseApp } from '@/data/ResponseApp';

export interface ILandRepository {
  addLand(
    image: File,
    name: string,
    wide: number,
    length: number,
    location: string,
    categoryGardenId: number
  ): Promise<IResponseApp<void>>;
  getLands(): Promise<IResponseApp<ILand[]>>;
  getLandById(id: number): Promise<IResponseApp<ILand>>;
  getLandsByCategpryGarden(categoryId: number): Promise<IResponseApp<ILand[]>>;
}
