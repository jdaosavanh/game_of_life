import React, { Component } from 'react';
import {connect} from 'react-redux';
import Board from './Board/Board';
import Controls from './Menu/Controls'
import './Game.css'
import Logic from "./Controllers/Logic";

class Game extends Component {

    state = {
        rows:8,
        columns:6,
        board: Array(8).fill().map(x => Array(6).fill(false))
    };


    setRow = (event) => {

        if(parseInt(event.target.value)) {

            let value = parseInt(event.target.value);
            this.setState({
                rows: value,
                board: Array(value).fill().map(x => Array(this.state.columns).fill(false))
            })
        }

    };

    setCol = (event) => {

        if(parseInt(event.target.value)) {
            let value = parseInt(event.target.value);
            this.setState({
                columns: value,
                board: Array(this.state.rows).fill().map(x => Array(value).fill(false))
            })
        }

    };

    resetBoard = () => {
        this.setState({
            board: Array(this.state.rows).fill().map(x => Array(this.state.columns).fill(false))
        })
    };


    onCellToggled = (row_index,column_index) => {
        let board = JSON.parse(JSON.stringify(this.state.board));

        board[row_index][column_index] = !board[row_index][column_index];

        this.setState({
            board: board
        })

    };

    runChange = () => {

        this.setState({
            board: Logic.runChange(this.state.board)
        })

    };

    render() {
        return (
            <div className={"game"}>
                <Controls
                    setRow={this.setRow.bind(this)}
                    setCol={this.setCol.bind(this)}
                    resetBoard={this.resetBoard.bind(this)}
                    runChange={this.runChange.bind(this)}

                />
                <Board onCellToggled={this.onCellToggled}
                       board={this.state.board}
                />

            </div>
        );
    }

}


export default (Game);