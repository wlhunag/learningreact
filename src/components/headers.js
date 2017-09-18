import React, {Component} from  "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    onClick() {
        console.log(123);
    }

    render() {
        const self = this;
        const {index} =this.state;
        const arr = ["Home", "com", "Exam"];
        return <ul className="header-container">
            {
                arr.map((item, _index) => {
                    const key = _index.toString();
                    let style = {
                        color: "black"
                    };
                    if (index == _index) {
                        style.color = "red";
                    }

                    return <li key={key} style={style} onClick={() => {
                    this.setState({index:_index})
                    }
                    }>
                        {item}
                    </li>
                })
            }
        </ul>;

    }
}