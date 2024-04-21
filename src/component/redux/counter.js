import { useDispatch, useSelector } from "react-redux";
import { selectcount,increment,decrement,dynamicvalue } from "./counterReducer"

function Counter()
{
    const dispatch=useDispatch();
    const reduxData=useSelector(selectcount);

    return<>
    <p>{reduxData}</p>
    <button onClick={()=>dispatch(increment())}>INCREMENT</button>
    <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    <button onClick={()=>dispatch(dynamicvalue(5))}>ADD 5</button>
    <button onClick={()=>dispatch(dynamicvalue(10))}>ADD 10</button>

    </>
}
export default Counter