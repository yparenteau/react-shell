import * as React from 'react';

const { navigation } = require('./navigation.scss');

interface PropsProps {
  applicationTitle: string;
}

export class NavigationComponent extends React.Component<PropsProps, void> {
  render() {
    const {applicationTitle} = this.props;

    return (
      <header className={navigation}>
        <div className="application">{applicationTitle}</div>
      </header>
    );
  }
}
