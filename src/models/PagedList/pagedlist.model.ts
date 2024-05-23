export interface PagedList<T> {
    dates: {
        maximun: string,
        minimun: string,
    },
    page: number,
    results: T[],
    total_pages: number,
    total_results: number   
}