import * as React from 'react';

const { shellHeader } = require('./shell-header.scss');

export interface ShellHeaderProps {
  applicationTitle: string;
}

export class ShellHeaderComponent extends React.Component<ShellHeaderProps, void> {
  render() {
    const {applicationTitle} = this.props;

    return (
      <header className={shellHeader}>
        <div className="application">{applicationTitle}</div>
      </header>
    );
  }
}
