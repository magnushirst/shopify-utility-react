import React from 'react';
import ConfigForm from '../molecule/configForm';
import BackChevronLink from '../atom/backChevronLink';
import DataSyncForm from '../molecule/dataSyncForm';

class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = { config: window.config.get() };
    this.saveConfig = (data) => { window.config.save(data); };
  }

  render() {
    const { config } = this.state;
    return (
      <div className="config">
        <div className="heading">
          <BackChevronLink to="/" />
          <h1>App Config</h1>
        </div>

        <div className="content">
          <ConfigForm config={config} saveConfig={this.saveConfig} />
          <DataSyncForm config={config} saveConfig={this.saveConfig} />
        </div>
      </div>
    );
  }
}

export default Config;
