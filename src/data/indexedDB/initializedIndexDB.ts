export const initializeTableCategoryGardenData = (
  objectStore: IDBObjectStore
) => {
  const initialData: ICategorieGarden[] = [
    {
      id: 1,
      name: 'Anggur',
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244459/categoryGarden/szhkyamp3drruetmh01z.png',
    },
    {
      id: 2,
      name: 'Kangkung',
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244458/categoryGarden/ekr77haq76o5bx2km6do.png',
    },
    {
      id: 3,
      name: 'Sawi',
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244425/categoryGarden/fidc6itfxf5grlt1xxdm.png',
    },
  ];

  initialData.forEach((data) => {
    objectStore.add(data);
  });
};

export const initializeTableMyCategoriesGardenData = (
  objectStore: IDBObjectStore
) => {
  const initialData: ICategorieGarden[] = [
    {
      id: 4,
      name: 'Bayam',
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244417/categoryGarden/b5k0k94h6j4kuoozc25s.png',
    },
    {
      id: 5,
      name: 'Timun',
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244416/categoryGarden/rzo6bjffrbea2unspypz.png',
    },
    {
      id: 6,
      name: 'Jagung',
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244354/categoryGarden/gyjvxkse2bfs3iltypqt.png',
    },
  ];

  initialData.forEach((data) => {
    objectStore.add(data);
  });
};

export const initializeTableMyLandsData = (objectStore: IDBObjectStore) => {
  const initialData: ILand[] = [
    {
      id: 1,
      name: 'Lahan Pak Somad',
      wide: 10,
      length: 10,
      location: 'Majalengka',
      categoryGarden: {
        id: 4,
        name: 'Bayam',
        imageUrl:
          'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705244417/categoryGarden/b5k0k94h6j4kuoozc25s.png',
      },
      imageUrl:
        'https://res.cloudinary.com/dzbpsx85o/image/upload/v1705284423/land-smartani/lixdywzpsnayzhuiiz6s.png',
      source: 'http',
      address: '0.0.0.0',
    },
  ];

  initialData.forEach((data) => {
    objectStore.add(data);
  });
};
