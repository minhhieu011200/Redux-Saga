export interface PaginationParams{
    limit: number;
    page: number;
    total: number;
}

export interface ListResponse<T>{
    data: T[];
    pagination: PaginationParams
}