import React, { Component } from "react";
import "./styles/Button.css";

class Button extends Component {
    render(){
        return (
            <div className="container-button">
                <div className="button-1"></div>
                <div className="button-2"></div>
                <div className="button-3"></div>
            </div>
        )
    }
}

export default Button;