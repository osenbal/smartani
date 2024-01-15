import { ILandRepository } from '@/contracts/repository/ILand.repository';
import { IResponseApp } from '../ResponseApp';
import IndexedDB from '../indexedDB/IndexedDB';
import { configIndexedDB, ETable } from '../indexedDB/config';

export default class LandRepository implements ILandRepository {
  private static instance: LandRepository;
  private constructor() {}

  static getInstance(): LandRepository {
    if (!LandRepository.instance) {
      LandRepository.instance = new LandRepository();
    }
    return LandRepository.instance;
  }

  private db = new IndexedDB(configIndexedDB.name, configIndexedDB.version);

  async addLand(
    image: File,
    name: string,
    wide: number,
    length: number,
    location: string,
    categoryGardenId: number
  ): Promise<IResponseApp<void>> {
    try {
      const category = await this.db.getById<ICategorieGarden>(
        ETable.MyCategoriesGarden,
        categoryGardenId
      );

      if (!category) {
        return {
          status: 404,
          message: 'Category not found',
          data: undefined,
        };
      }

      // upload image
      const formData = new FormData();
      formData.append('file', image);
      formData.append(
        'upload_preset',
        import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append('folder', 'land-smartani');
      formData.append('api_key', import.meta.env.VITE_APP_CLOUDINARY_API_KEY);

      const response = await fetch(
        `${import.meta.env.VITE_APP_CLOUDINARY_API_URL}/${
          import.meta.env.VITE_APP_CLOUDINARY_NAME
        }/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.status !== 200) {
        return {
          status: response.status,
          message: response.statusText,
          data: undefined,
        };
      }
      const responseData = await response.json();
      const imageUrl = responseData.secure_url;

      // Query the existing records to find the maximum ID
      const existingLands = await this.db.getAll<ILand>(ETable.MyLands);
      const maxId = existingLands.reduce(
        (max, land) => (land.id > max ? land.id : max),
        0
      );

      const land: ILand = {
        id: maxId + 1,
        name,
        wide,
        length,
        location,
        categoryGarden: category,
        source: 'http',
        address: '0.0.0.0',
        imageUrl: imageUrl,
      };

      await this.db.add(ETable.MyLands, land);

      return {
        status: 200,
        message: 'Category added',
        data: undefined,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error?.message || 'Error',
        data: undefined,
      };
    }
  }
  async getLands(): Promise<IResponseApp<ILand[]>> {
    throw new Error('Method not implemented.');
  }
  async getLandById(id: number): Promise<IResponseApp<ILand>> {
    try {
      const land = await this.db.getById<ILand>(ETable.MyLands, id);

      if (!land) {
        return {
          status: 404,
          message: 'Land not found',
          data: null,
        };
      }

      return {
        status: 200,
        message: 'Land found',
        data: land,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error?.message || 'Error',
        data: null,
      };
    }
  }
  async getLandsByCategpryGarden(
    categoryId: number
  ): Promise<IResponseApp<ILand[]>> {
    try {
      const category = await this.db.getById<ICategorieGarden>(
        ETable.MyCategoriesGarden,
        categoryId
      );

      if (!category) {
        return {
          status: 404,
          message: 'Category not found',
          data: [],
        };
      }

      const lands = await this.db.getAll<ILand>(ETable.MyLands);

      const landsByCategory = lands.filter(
        (land) => land.categoryGarden.id === categoryId
      );

      return {
        status: 200,
        message: 'Lands found',
        data: landsByCategory,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error?.message || 'Error',
        data: [],
      };
    }
  }
  async deleteLand(id: number): Promise<IResponseApp<void>> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
