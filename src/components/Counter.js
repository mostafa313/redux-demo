import React, { Component } from 'react'
import {connect} from 'react-redux'
import {countDown, countUp} from '../actions/counter'

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countUp: () => {
            dispatch(countUp())
        },
        countDown: () => {
            dispatch(countDown())
        }
    }
}

class Counter extends Component {
    render() {
        return (
            <div>
                <button className="btn-big" onClick={this.props.countUp}>+</button>
                <button className="btn-big" onClick={this.props.countDown}>-</button>
                <h2>{this.props.number}</h2>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
