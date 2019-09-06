export class Products{
    id: string;
    name: string;
    type: string;
    price: number;
    imgURL: string;
}

export class Orders{
    id: string;
    name: string;
    price: number;
    product: string;
    quantity: number;
    time: string;
    phonenumber: number;
}