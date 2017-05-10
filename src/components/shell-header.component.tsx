import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./shell-header.scss');

export interface ShellHeaderProps {
  applicationTitle: string;
}

export const ShellHeaderComponent: React.StatelessComponent<ShellHeaderProps> = props => {
  return (
    <header className={classNames(styles.header, 'shell-header')}>
      <div className={classNames(styles.applicationLogo, 'shell-application-logo')} />
      <div className={classNames(styles.applicationTitle, 'shell-application-title')}>{props.applicationTitle}</div>
      <div className={classNames(styles.loggedInfo, 'shell-application-info')}>
        <span>Signed is as John Doe</span>
        <button className={classNames(styles.btnSignOut, 'shell-button-sign-out')} />
      </div>
    </header>
  );
};
