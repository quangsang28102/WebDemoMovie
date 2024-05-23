export interface IPeople<T>{
   id: number,
   known_for_department: string,
   name: string,
   profile_path: string,
   known_for: T[]
}