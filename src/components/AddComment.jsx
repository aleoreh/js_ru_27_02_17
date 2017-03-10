import React, {Component} from "react";

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {author: "", text: ""};
    }

    handleAuthorInput = (event) => {
        if (event.target.value.length > 10) return;
        this.setState({author: event.target.value});
    }

    handleTextInput = (event) => {
        if (event.target.value.length > 150) return;
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <input value={this.state.author} onInput={this.handleAuthorInput}/>
                <textarea value={this.state.text} onInput={this.handleTextInput}/>
            </div>
        );
    }
}

export default AddComment;
