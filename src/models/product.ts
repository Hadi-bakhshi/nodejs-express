import { readFile, writeFile } from 'fs';
import path from 'path';
export interface IProducts {
  id?: string | number;
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
  id?: string | number;
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
    this.id = Math.round(Math.random() * 99).toString();
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
  static findById(id: string | number, cb: (products: IProducts) => any) {
    getProductsFromFile((products: IProducts[]) => {
      const product = products.find((item) => item?.id === id);
      if (product) {
        cb(product);
      }
    });
  }
}
