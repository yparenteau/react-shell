import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationComponent } from '../components/navigation.component';
import { Application } from '../models/application.model';
import { ApplicationState } from '../reducers/application.reducer';

interface NavigationProps {
  currentApplication: Application;
}

const Navigation: React.StatelessComponent<NavigationProps> = props => {
  const {title} = props.currentApplication;

  return (<NavigationComponent applicationTitle={title} />);
};

const mapStateToProps = (state: {application: ApplicationState}): Partial<{}> => ({
  currentApplication: state.application.byId[state.application.selected]
});

const mapDispatchToProps = {
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
export default NavigationContainer;
