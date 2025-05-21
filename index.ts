function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    const res: string = input.toLowerCase();
    console.log(res);
    return res;
  }

  const res: string = input.toUpperCase();
  console.log(res);
  return res;
}



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filter = items?.filter((item) => item.rating >= 4);
  console.log(filter);
  return [];
}



const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.9 },
  { title: "Book C", rating: 5.0 },
];

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const res = arrays.reduce((acc, current) => acc.concat(current), []);
  console.log(res);
  return res;
}



class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");



function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}



interface Product {
  name: string;
  price: number;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

function getMostExpensiveProduct(products: Product[]): Product | null {
  const highest = products.reduce((max, product) =>
    product.price > max.price ? product : max
  );
  return highest;
}



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}



async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Error: Negative number not allowed"));
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
