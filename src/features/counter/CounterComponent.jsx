import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./counterSlice.jsx";
import { Box, Button, Container } from "@mui/material";

const CounterComponent = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Container>
      <Box className=" m-auto mt-8 mb-8 w-10 p-2  rounded-3xl bg-slate-200 text-center font-bold text-black text-lg">
        {count}
      </Box>
      <Box className="flex justify-center gap-2 mt-2">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};

export default CounterComponent;
