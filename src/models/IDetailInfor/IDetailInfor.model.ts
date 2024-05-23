export interface IDetailInfor<T>{
    backdrop_path: string,
    overview: string,
    genres: T[],     
    poster_path: string,
    tagline:string,
    title: string,
    release_date: string,
    vote_average: string,
}