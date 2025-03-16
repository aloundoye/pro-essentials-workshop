import { Extends, Expect } from '@total-typescript/helpers';

type Base = {
  id: string;
  createdAt: Date;
  name: string;
};

type User = {
  email: string;
} & Base;

type Product = {
  price: number;
} & Base;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
