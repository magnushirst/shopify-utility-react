import React from "react"
import TextInput from "../atom/textInput"

class ConfigForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "mango-test2.myshopify.com",
            apiKey: "68446xxxxxxxxxxxxxxxxxxxxxx",
            secret: "shppa_d9583xxxxxxxxxxxxxxxxxxxxx",
        };
    }

    render() {
        return (
            <form className="config-form">
                <TextInput text="Url:" name="url" id="url" value={this.state.url}/>
                <TextInput text="API Key:" name="apiKey" id="apiKey" value={this.state.apiKey}/>
                <TextInput text="Secret:" name="secret" id="secret" value={this.state.secret}/>
                <button type="button" onClick="alert('clicked')">
                    Save
                </button>
            </form>
        )
    }
}

export default ConfigForm