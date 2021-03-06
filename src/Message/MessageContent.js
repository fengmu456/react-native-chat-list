import React from "react";
import {Text} from "react-native";
import config from "../config";

export default class MessageContent extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        data: {
            position: "left",
            type: "text",
            body: "MessageText"
        }
    };

    render() {
        const render = config.itemRenders[this.props.data.type];
        if (render) {
            return render(this.props.data, this.props.position);
        } else {
            return <Text style={{color: "#70ff81", padding: 20}}>未实现的消息类型</Text>
        }
    }
}