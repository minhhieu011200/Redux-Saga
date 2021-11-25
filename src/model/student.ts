export interface Student{
    id?: string;
    name: string;
    age: number;
    mark: number;
    gender: 'female' | 'male';
    updatedAt?: number;
    createdAt?: number;
}