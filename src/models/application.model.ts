// FIXME: There is an issue with interface without implementation.
// https://github.com/s-panferov/awesome-typescript-loader/issues/411
// export class ApplicationImpl implements ApplicationMap {
//   [key: string]: Application;
// }

export interface Application {
  id: string;
  title: string;
  url: string;
}

export interface ApplicationMap {
  [key: string]: Application;
}
