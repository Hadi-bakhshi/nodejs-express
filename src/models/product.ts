interface IProducts {
  title: string;
}
const products: IProducts[] = [];
export class Product {
  title: string;
  static products: IProducts[];
  constructor(t: string) {
    this.title = t;
  }

  public save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}
