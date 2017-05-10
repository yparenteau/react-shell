import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./shell-header.scss');

export interface ShellHeaderProps {
  applicationTitle: string;
  className?: string;
}

export class ShellHeaderComponent extends React.Component<ShellHeaderProps, void> {
  render() {
    const {applicationTitle, className} = this.props;

    return (
      <header className={classNames(styles.header, className)}>
        <div className={classNames(styles.applicationLogo, 'shell-application-logo')} />
        <div className={classNames(styles.applicationTitle, 'shell-application-title')}>{applicationTitle}</div>
        <div className={classNames(styles.loggedInfo, 'shell-application-info')}>
          <span>Signed is as John Doe</span>
          <button className={classNames(styles.btnSignOut, 'shell-button-sign-out')}></button>
        </div>
      </header>
    );
  }
}
