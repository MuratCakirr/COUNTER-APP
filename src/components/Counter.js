import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByCount } from "../redux/counter/counterSlice";
import { useState } from "react";

function Counter() {
    const [amount, setAmount] = useState(0);
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br /><br />

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <button onClick={() => dispatch(incrementByCount(amount))}>Increment by Amount</button>
        </div>
    );
}

export default Counter;
