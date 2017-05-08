import * as React from 'react';

const { navigation } = require('./navigation.scss');

export interface NavigationProps {
  applicationTitle: string;
}

export class NavigationComponent extends React.Component<NavigationProps, void> {
  render() {
    const {applicationTitle} = this.props;

    return (
      <header className={navigation}>
        <div className="application">{applicationTitle}</div>
      </header>
    );
  }
}
