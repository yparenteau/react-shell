import { combineReducers } from 'redux';
import applicationReducer, { ApplicationState } from '../src/reducers/application.reducer';

export interface RootState {
  application: ApplicationState;
}

const rootReducer = combineReducers<RootState>({
  application: applicationReducer
});

export default rootReducer;
