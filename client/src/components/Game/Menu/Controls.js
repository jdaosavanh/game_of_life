import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, InputGroup} from 'reactstrap';

class Controls extends Component{


    render(){

        const inputStyles = {
            width: '10rem',
            margin: 'auto'
        };

        const buttonStyles = {
            margin: ".5rem .2rem"
        };

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
                    onClick={this.toggle}
                >Next</Button>
                <Button
                    color={"dark"}
                    style={buttonStyles}
                    onClick={this.toggle}
                >Continuous</Button>
            </div>
        );
    };
}


export default (Controls);