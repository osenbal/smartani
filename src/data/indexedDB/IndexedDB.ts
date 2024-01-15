import { ETable } from './config';
import {
  initializeTableCategoryGardenData,
  initializeTableMyLandsData,
  initializeTableMyCategoriesGardenData,
} from './initializedIndexDB';

interface IDB {
  add<T>(tableName: string, item: T): Promise<number>;
  getAll<T>(tableName: string): Promise<T[]>;
  getById<T>(tableName: string, id: number): Promise<T>;
  update<T>(tableName: string, item: T): Promise<void>;
  delete(tableName: string, id: number): Promise<void>;
}

export default class IndexedDB implements IDB {
  private db: IDBDatabase | null = null;

  constructor(private dbName: string, private dbVersion: number) {}

  async initializeDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = (event) => {
        reject(event.target);
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        const categoriesGarden = db.createObjectStore(ETable.CategoriesGarden, {
          keyPath: 'id',
          autoIncrement: true,
        });
        initializeTableCategoryGardenData(categoriesGarden);

        const myCategoriesGarden = db.createObjectStore(
          ETable.MyCategoriesGarden,
          {
            keyPath: 'id',
            autoIncrement: true,
          }
        );
        initializeTableMyCategoriesGardenData(myCategoriesGarden);

        const myLand = db.createObjectStore(ETable.MyLands, {
          keyPath: 'id',
          autoIncrement: true,
        });
        initializeTableMyLandsData(myLand);
      };
    });
  }

  private async openDB(): Promise<IDBDatabase> {
    if (this.db) {
      return this.db;
    } else {
      return this.initializeDB();
    }
  }

  private async closeDB(): Promise<void> {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  private handleError(event: Event): void {
    console.error(`Error: ${event}`);
  }

  async add<T>(tableName: string, item: T): Promise<number> {
    const db = await this.openDB();

    try {
      const transaction = db.transaction(tableName, 'readwrite');
      const objectStore = transaction.objectStore(tableName);

      const request = objectStore.add(item);

      return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
          resolve((event.target as IDBRequest).result as number);
        };

        request.onerror = (event) => {
          this.handleError(event);
          reject(event.target);
        };

        transaction.oncomplete = () => {
          this.closeDB();
        };
      });
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async getAll<T>(tableName: string): Promise<T[]> {
    const db = await this.openDB();

    try {
      const transaction = db.transaction(tableName, 'readonly');
      const objectStore = transaction.objectStore(tableName);

      const request = objectStore.getAll();

      return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
          resolve((event.target as IDBRequest).result as T[]);
        };

        request.onerror = (event) => {
          this.handleError(event);
          reject(event.target);
        };

        transaction.oncomplete = () => {
          this.closeDB();
        };
      });
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async getById<T>(tableName: string, id: number): Promise<T> {
    const db = await this.openDB();

    try {
      const transaction = db.transaction(tableName, 'readonly');
      const objectStore = transaction.objectStore(tableName);

      const request = objectStore.get(id);

      return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
          resolve((event.target as IDBRequest).result as T);
        };

        request.onerror = (event) => {
          this.handleError(event);
          reject(event.target);
        };

        transaction.oncomplete = () => {
          this.closeDB();
        };
      });
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async update<T>(tableName: string, item: T): Promise<void> {
    const db = await this.openDB();

    try {
      const transaction = db.transaction(tableName, 'readwrite');
      const objectStore = transaction.objectStore(tableName);

      const request = objectStore.put(item);

      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve();
        };

        request.onerror = (event) => {
          this.handleError(event);
          reject(event.target);
        };

        transaction.oncomplete = () => {
          this.closeDB();
        };
      });
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async delete(tableName: string, id: number): Promise<void> {
    const db = await this.openDB();

    try {
      const transaction = db.transaction(tableName, 'readwrite');
      const objectStore = transaction.objectStore(tableName);

      const request = objectStore.delete(id);

      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve();
        };

        request.onerror = (event) => {
          this.handleError(event);
          reject(event.target);
        };

        transaction.oncomplete = () => {
          this.closeDB();
        };
      });
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }
}
