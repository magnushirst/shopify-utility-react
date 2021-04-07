import React from "react"
import TextInput from "../atom/textInput"

const defaultUrl = "website-name.myshopify.com";
const defaultApiKey = "68446xxxxxxxxxxxxxxxxxxxxxx";
const defaultSecret = "shppa_d9583xxxxxxxxxxxxxxxxxxxxx";

class ConfigForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.config.url ? props.config.url : defaultUrl,
            apiKey: props.config.apiKey ? props.config.apiKey : defaultApiKey,
            secret: props.config.secret ? props.config.secret : defaultSecret,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form className="config-form">
                <TextInput text="Url:" name="url" id="url" value={this.state.url} onChange={this.handleChange} />
                <TextInput text="API Key:" name="apiKey" id="apiKey" value={this.state.apiKey} onChange={this.handleChange} />
                <TextInput text="Secret:" name="secret" id="secret" value={this.state.secret} onChange={this.handleChange} />
                <button type="button" onClick={() => {this.props.saveConfig(this.state)}}>
                    <span role="img" className="button-icon">✔</span>
                    Save
                </button>
            </form>
        )
    }
}

export default ConfigForm