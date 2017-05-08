export class ApplicationImpl implements ApplicationMap {
  [key: string]: Application;

}

export interface Application {
  id: string;
  title: string;
  url: string;
}

export interface ApplicationMap {
  [key: string]: Application;
}
