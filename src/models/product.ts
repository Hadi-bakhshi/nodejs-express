import { readFile, writeFile } from 'fs';
import path from 'path';
export interface IProducts {
  title: string;
}
export class Product {
  title: string;
  static products: IProducts[];
  constructor(t: string) {
    this.title = t;
  }

  public save() {
    // Path that I want to read and write
    const p = path.join(path.dirname(require?.main?.filename as string), 'data', 'products.json');
    // Read the file
    readFile(p, (err, fileContent) => {
      // products variable to put the products in it to save it in json file
      let products: any[] = [];
      // If there was no error, then I'll parse the products I got from the json file
      if (!err) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        products = JSON.parse(fileContent.toString());
      }
      // I the file doesn't exist, I'll push the this(product object) to the array
      products.push(this);
      // then I'll create a json file and stringify the products to be able to store it
      writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          throw err;
        }
      });
    });
  }

  static fetchAll(cb: (products: any) => any) {
    const p = path.join(path.dirname(require?.main?.filename as string), 'data', 'products.json');
    readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent.toString()));
    });
  }
}
