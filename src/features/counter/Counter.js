import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount, selectCount, reset } from "./counterSlice"

export const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    const users = [
        {name:"John", age:31, uid:"aoisdoiu980979f8s"},
        {name:"Steven", age:42, uid:"aoisdoiu980979f8s"},
    ]
    return (
        <div>
            <button onClick={()=>count>0 ? dispatch(decrement()) : null}>-</button>
                <span> {count} </span>
           <button onClick={()=>count<10 ? dispatch(increment()): null}>+</button>
           {users.map(user=><div key={user.uid}>{user.name}</div>)}
           <button onClick={()=>count<9 ? dispatch(incrementByAmount(2)) : count<10 ? dispatch(incrementByAmount(1)) : null}>Add 2</button>
           <button onClick={()=>dispatch(reset())}>RESET</button>
        </div>
    )
}