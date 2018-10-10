import React, { Component } from 'react';
import Cell from './Cell/Cell';

class Board extends Component {

    state = {
        board:this.props.board
    };

    componentWillReceiveProps(nextProps) {

        this.setState({
            board: nextProps.board
        });

    }

    cellClass = (value) =>
    {
        //Set class to cell on if it's true else just cell
        return value ? "cell on": "cell"
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
                                           <Cell cellClass={this.cellClass(col)} key={row_index+col_index} cellToggle={this.props.onCellToggle.bind(this,row_index,col_index)}/>
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