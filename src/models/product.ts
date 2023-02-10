import { readFile, writeFile } from 'fs';
import path from 'path';
export interface IProducts {
  title: string;
  imageUrl: string;
  description: string;
  price: string | number;
}
// path of the json file to read and write the data in it
const p = path.join(path.dirname(require?.main?.filename as string), 'data', 'products.json');

// Helper function
const getProductsFromFile = <T>(callback: (products: T[]) => T[] | void) => {
  readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      callback(JSON.parse(fileContent.toString()));
    }
  });
};

// Products model class
export class Product {
  title: string;
  imageUrl: string;
  description: string;
  price: string | number;
  static products: IProducts[];
  constructor(title: string, imageUrl: string, description: string, price: string | number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  public save() {
    getProductsFromFile((products: IProducts[]) => {
      products.push(this);
      writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          throw err;
        }
      });
    });
  }

  static fetchAll(cb: (products: IProducts[]) => any) {
    getProductsFromFile(cb);
  }
}
