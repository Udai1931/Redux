import React,{useState} from 'react';
import {connect} from 'react-redux';

function Bat(props) {
    const [bats,setBats] = useState(20);
    return (
        <div>
            {/* <h2>Bats : {bats}</h2> */}
            <h2>Bats : {props.bats}</h2>
            {/* <button onClick={()=>setBats(bats-1)}>Buy Bat</button> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        bats : state.bats
    }
}

export default connect(mapStateToProps)(Bat)
