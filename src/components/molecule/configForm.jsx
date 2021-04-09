import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atom/textInput';

const defaultUrl = 'website-name.myshopify.com';
const defaultApiKey = '68446xxxxxxxxxxxxxxxxxxxxxx';
const defaultSecret = 'shppa_d9583xxxxxxxxxxxxxxxxxxxxx';

class ConfigForm extends React.Component {
  constructor(props) {
    super(props);
    const { secret, url, apiKey } = props.config;
    this.state = {
      url,
      apiKey,
      secret,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { props } = this;
    const { secret, url, apiKey } = this.state;
    return (
      <div>
        <form className="config-form">
          <TextInput text="Url:" name="url" id="url" value={url} onChange={this.handleChange} />
          <TextInput text="API Key:" name="apiKey" id="apiKey" value={apiKey} onChange={this.handleChange} />
          <TextInput text="Secret:" name="secret" id="secret" value={secret} onChange={this.handleChange} />
          <button
            type="button"
            onClick={() => {
              props.saveConfig(this.state);
            }}
          >
            <span role="img" className="button-icon">✔</span>
            Save
          </button>
        </form>
      </div>
    );
  }
}

ConfigForm.propTypes = {
  config: PropTypes.shape({
    url: PropTypes.string,
    apiKey: PropTypes.string,
    secret: PropTypes.string,
  }),
  saveConfig: PropTypes.func,
};

ConfigForm.defaultProps = {
  config: {
    url: defaultUrl,
    apiKey: defaultApiKey,
    secret: defaultSecret,
  },
  saveConfig: () => {},
};

export default ConfigForm;
