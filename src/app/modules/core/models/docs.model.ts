export interface Timeline {
  id: number;
  date: string;
  class: string;
  title: string;
  text: string;
  src: string;
}
export interface Timetable {
  title: string;
  date: string;
  content: string;
}
export interface Achievement {
  id: number;
  src: string;
  title: string;
}
export interface NewsTest{
  id: number;
  title: string;
  content: string;
  link: string;
}
export interface News {
  id: number;
  src: string;
  srcDetails: Array<NewsPopup>;
  title: string;
  content: string;
  contentDetails: string
  link: string;
}
export interface Url {
  id: number;
  type: number;
  urlAfterRedirects: string;
  src: string;
}
export interface NewsPopup{
  id:number
  src:string
}