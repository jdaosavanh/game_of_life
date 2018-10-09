import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cell from './Cell/Cell';
import Logic from '../Controllers/Logic'

class Board extends Component {

    state = {
        board:Array(this.props.rows).fill().map(x => Array(this.props.columns).fill(false))
    };

    componentWillReceiveProps(nextProps) {

        this.setState({
            board: Array(nextProps.rows).fill().map(x => Array(nextProps.columns).fill(false))
        });

    }

    onCellToggled = (row_index,column_index) => {
        let board = JSON.parse(JSON.stringify(this.state.board));

        board[row_index][column_index] = !board[row_index][column_index];

        this.setState({
            board: board
        })

    };

    cellClass = (value) =>
    {
        //Set class to cell on if it's true else just cell
        return value ? "cell on": "cell"
    };

    runChange = () => {

        this.setState({
            board: Logic.runChange(this.state.board)
        })

    };


    render() {
        return (
            <div className={"board"} >
                {
                    this.state.board.map((row, row_index) => {
                        return(
                           <div className={"board-row"} key={row_index}>
                               {
                                   row.map((col,col_index) =>{
                                       return(
                                           <Cell cellClass={this.cellClass(col)} key={row_index+col_index} cellToggle={this.onCellToggled.bind(this,row_index,col_index)}/>
                                       )
                                   })
                               }
                           </div>
                        )
                    })
                }
            </div>
        );
    }

}


export default (Board);