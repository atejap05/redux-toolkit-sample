import { Box } from "@mui/material";
import "./index.css";
import CounterComponent from "./features/counter/CounterComponent";

function App() {
  return (
    <>
      <Box className=" text-center py-2 bg-yellow-100 text-cyan-900">
        Redux Toolkit Example
      </Box>
      <div className="text-center mt-2 font-bold text-orange-500">
        <CounterComponent />
      </div>
    </>
  );
}

export default App;
