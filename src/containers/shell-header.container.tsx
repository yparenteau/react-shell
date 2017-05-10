import * as React from 'react';
import { connect } from 'react-redux';
import { ShellHeaderComponent } from '../components/shell-header.component';
import { ApplicationState } from '../reducers/application.reducer';

export interface ShellNavigationContainerProps {
  applicationTitle: string;
}

const Container: React.StatelessComponent<ShellNavigationContainerProps> = props => {
  return (<ShellHeaderComponent {...props} />);
};

const mapStateToProps = (state: {application: ApplicationState}): Partial<{}> => ({
  // TODO: Should use a selector
  applicationTitle: state.application.byId[state.application.selected]
    ? state.application.byId[state.application.selected].title
    : ''
});

const mapDispatchToProps = {
};

export const ShellHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
