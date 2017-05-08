export interface Application {
  id: string;
  title: string;
  url: string;
}

export interface ApplicationMap {
  [key: string]: Application;
}
