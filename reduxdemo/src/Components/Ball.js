import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyBall } from '../redux/ballAction';

function Ball({balls,buyBall,sellBall}) {
    const [qty,setQty] = useState(1);
    return (
        <div>
            <h2>Balls : {balls}</h2>
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} />
            <button onClick={()=>buyBall(qty)}>Buy Ball</button>
            <button onClick={()=>sellBall(qty)}>Sell Ball</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        balls : state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBall : (qty) => dispatch(buyBall(qty)),
        sellBall : (qty) => dispatch({type:"SELL_BALL",payload:qty})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball);
