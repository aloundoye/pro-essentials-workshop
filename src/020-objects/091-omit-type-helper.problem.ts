interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
type OmitedProduct = Omit<Product, 'id'>

const addProduct = (productInfo: OmitedProduct) => {
  // Do something with the productInfo
};

addProduct({
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});

addProduct({
  // @ts-expect-error
  id: 1,
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});
