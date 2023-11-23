import React from 'react'
import { buyIcecream } from '../redux';
import { connect } from 'react-redux'


function IcecreamContainer(props) {
    return (
        <div>
            <h2>Number of icecream - {props.numOfIcecream}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfIcecream: state.numOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);