import "./App.css";
import { InputComponents } from "./InputComponents";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { minusNumber, plusNumber } from "./store/slices/countSlice";

function App() {
  const count = useAppSelector((state) => state.countSlice.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="card">
        <h1>count is {count}</h1>
        <button onClick={() => dispatch(minusNumber(10))}>Minus 10</button>
        <button onClick={() => dispatch(plusNumber(10))}>Plus 10</button>
      </div>

      <InputComponents />
    </>
  );
}

export default App;
