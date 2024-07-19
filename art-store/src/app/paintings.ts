export interface Painting {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    description: string;
}

export const paintings = [
    {
        id: 1,
        imageUrl: 'assets/ghostpfp.jpg',
        name: 'Ghost Art',
        price: 5,
        description: 'A painting of a ghost'
    },
    {
        id: 2,
        imageUrl: 'assets/cat.jpg',
        name: 'Cat Art',
        price: 8,
        description: 'A painting of a cat'
    },
    {
        id: 3,
        imageUrl: 'assets/JackOLantern.jpg',
        name: 'Pumpkin Art',
        price: 10,
        description: 'A painting of a pumpkin'
    }

];