import { ICategpryGardenRepository } from '@/contracts/repository/ICategoryGardent.repository';
import { IResponseApp } from '../ResponseApp';
import IndexedDB from '../indexedDB/IndexedDB';
import { configIndexedDB, ETable } from '../indexedDB/config';

export default class CategoryGardenRepository
  implements ICategpryGardenRepository
{
  private static instance: CategoryGardenRepository;
  private constructor() {}
  static getInstance(): CategoryGardenRepository {
    if (!CategoryGardenRepository.instance) {
      CategoryGardenRepository.instance = new CategoryGardenRepository();
    }
    return CategoryGardenRepository.instance;
  }

  private db = new IndexedDB(configIndexedDB.name, configIndexedDB.version);

  async addMyCategoryGarden(id: number): Promise<IResponseApp<void>> {
    try {
      const category = await this.db.getById(ETable.CategoriesGarden, id);
      if (!category) {
        return {
          status: 404,
          message: 'Category not found',
          data: undefined,
        };
      }

      const [deleteResult, addResult] = await Promise.allSettled([
        this.db.delete(ETable.CategoriesGarden, id),
        this.db.add(ETable.MyCategoriesGarden, category),
      ]);

      if (
        deleteResult.status === 'rejected' ||
        addResult.status === 'rejected'
      ) {
        const error =
          deleteResult.status === 'rejected'
            ? deleteResult.reason
            : addResult.status || 'Error';

        return {
          status: 500,
          message: error?.message || 'Error',
          data: undefined,
        };
      }

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
  async getMyCategoryGardens(): Promise<IResponseApp<ICategorieGarden[]>> {
    try {
      const categories = await this.db.getAll<ICategorieGarden>(
        ETable.MyCategoriesGarden
      );

      return {
        status: 200,
        message: 'Categories found',
        data: categories,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error?.message || 'Error',
        data: null,
      };
    }
  }
  async getMyCategoryGardenById(
    id: number
  ): Promise<IResponseApp<ICategorieGarden>> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  async deleteMyCategoryGarden(id: number): Promise<IResponseApp<void>> {
    console.log(id);
    throw new Error('Method not implemented.');
  }

  async getCategoryGardens(): Promise<IResponseApp<ICategorieGarden[]>> {
    try {
      const categories = await this.db.getAll<ICategorieGarden>(
        ETable.CategoriesGarden
      );

      return {
        status: 200,
        message: 'Categories found',
        data: categories,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error?.message || 'Error',
        data: null,
      };
    }
  }
}
