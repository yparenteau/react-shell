import { ApplicationMap } from '../models/application.model';

export interface ApplicationState {
  selected: string;
  byId: ApplicationMap;
  allId: string[];
}

const INITIAL_STATE: ApplicationState = {
  selected: 'chailly',
  byId: {
    dbvx: {
      id: 'dbvx',
      title: 'DBVX',
      url: 'http://temp.dbvx.com'
    },
    chailly: {
      id: 'chailly',
      title: 'Chailly',
      url: 'http://temp.chailly.com'
    }
  },
  allId: ['dbvx', 'chailly']
};

export default function applicationReducer(state: ApplicationState = INITIAL_STATE, action: any): ApplicationState {
  switch (action.type) {
    default:
      return state;
  }
}
