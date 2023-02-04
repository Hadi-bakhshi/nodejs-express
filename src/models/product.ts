import { readFile, writeFile } from 'fs';
import path from 'path';
export interface IProducts {
  title: string;
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
  static products: IProducts[];
  constructor(t: string) {
    this.title = t;
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
