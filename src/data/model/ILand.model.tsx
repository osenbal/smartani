interface ILand {
  id: number;
  name: string;
  wide: number;
  length: number;
  location: string;
  categoryGarden: ICategorieGarden;
  imageUrl: string;
  source: 'http' | 'mqtt' | 'https';
  address: string;
}

interface ICategorieGarden {
  id: number;
  name: string;
  imageUrl: string;
}
