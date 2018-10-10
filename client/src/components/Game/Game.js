import React, { Component } from 'react';
import Board from './Board/Board';
import Controls from './Menu/Controls'
import './Game.css'
import Logic from "./Controllers/Logic";

class Game extends Component {

    state = {
        rows:8,
        columns:6,
        board: Array(8).fill().map(x => Array(6).fill(false)),
        continuous: true
    };


    setRow = (event) => {
        //Updates the value of row and board to use input amount of rows
        if(parseInt(event.target.value)) {
            let value = parseInt(event.target.value);
            this.setState({
                rows: value,
                board: Array(value).fill().map(x => Array(this.state.columns).fill(false))
            })
        }
    };

    setCol = (event) => {
        //Updates the value of column and board to use input amount of columns
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


    onCellToggle = (row_index,column_index) => {
        let board = JSON.parse(JSON.stringify(this.state.board));
        //Set cell clicked to the opposite of what it was.
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

    runContinuous = () => {


        clearInterval(this.intervalId);

        //Continuous state is set to true and will flip once clicked
        if(this.state.continuous) {
            this.intervalId = setInterval(this.runChange, 350)
        }

        this.setState({
            continuous: !this.state.continuous
        });
    };


    render() {
        return (
            <div className={"game"}>
                <Controls
                    setRow={this.setRow.bind(this)}
                    setCol={this.setCol.bind(this)}
                    resetBoard={this.resetBoard.bind(this)}
                    runChange={this.runChange.bind(this)}
                    runContinuous={this.runContinuous.bind(this)}
                    continuous={this.state.continuous}

                />
                <Board onCellToggle={this.onCellToggle}
                       board={this.state.board}
                />

            </div>
        );
    }

}


export default (Game);