import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, InputGroup} from 'reactstrap';

class Controls extends Component{


    render(){

        const inputStyles = {
            width: '10rem',
            margin: '.25rem auto'
        };

        const buttonStyles = {
            margin: ".5rem .2rem"
        };

        const continuousText = this.props.continuous ? 'Continuous':'Stop';

        return(
            <div>
                <div>
                    <Input
                        placeholder={"rows default 8"}
                        style={inputStyles}
                        onChange={this.props.setRow}
                    />
                    <Input
                        placeholder={"cols default 6"}
                        style={inputStyles}
                        onChange={this.props.setCol}
                    />
                </div>
                <Button
                    color={"dark"}
                    style={buttonStyles}
                    onClick={this.props.resetBoard}
                >Reset</Button>
                <Button
                    color={"dark"}
                    style={buttonStyles}
                    onClick={this.props.runChange}
                >Next</Button>
                <Button
                    color={"dark"}
                    style={buttonStyles}
                    onClick={this.props.runContinuous}
                >{continuousText}</Button>
            </div>
        );
    };
}


export default (Controls);