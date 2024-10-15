interface RatingType {
  rate: number;
  count: number;
}

export interface DataType {
  id: string;
  category: string;
  description: string;
  price: string;
  title: string;
  image: string;
  rating: string
}

export interface UserDataType {
  _id: string;
  userName: string;
  userPass: string;
}
