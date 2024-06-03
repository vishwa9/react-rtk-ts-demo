// import { useSelector, useDispatch } from "react-redux"
import { ordered, restoked } from "./cakeSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function CakeView() {
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState(1);

  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <input 
            type="number"
            value={value}
            onChange={(e) => setValue(+(e.target.value))}
        />
        <button onClick={() => dispatch(restoked(value))}>Restock cakes</button>
    </div>
  )
}
