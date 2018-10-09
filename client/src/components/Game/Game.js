import React, { Component } from 'react';
import {connect} from 'react-redux';
import Board from './Board/Board';
import Controls from './Menu/Controls'
import './Game.css'

class Game extends Component {

    state = {
        rows:8,
        columns:6,
    };

    setRow = (event) => {

        if(parseInt(event.target.value)) {
            this.setState({
                rows: parseInt(event.target.value)
            })
        }

    };

    setCol = (event) => {

        if(parseInt(event.target.value)) {
            this.setState({
                columns: parseInt(event.target.value)
            })
        }

    };

    resetBoard = () => {

        this.setState({
            rows: this.state.rows,
            columns: this.state.columns
        })

    };

    render() {
        return (
            <div className={"game"}>
                <Controls setRow={this.setRow.bind(this)} setCol={this.setCol.bind(this)} resetBoard={this.resetBoard.bind(this)}/>
                <Board rows={this.state.rows} columns={this.state.columns}/>
            </div>
        );
    }

}


export default (Game);