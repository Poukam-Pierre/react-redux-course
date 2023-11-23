import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux';


function HookIcecreamContainer() {
    const numOfIcecream = useSelector(state => state.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecream - {numOfIcecream}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    );
}

export default HookIcecreamContainer