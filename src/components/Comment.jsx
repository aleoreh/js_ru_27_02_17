import React, {Component} from "react";

class Comment extends Component {
    constructor() {
        super();
    }

    render() {
        const {comment} = this.props;

        return (
            <li className="comment">
                <div className="comment__user">{comment.user}</div>
                <div className="comment__text">{comment.text}</div>
            </li>
        );
    }
}

export default Comment;
