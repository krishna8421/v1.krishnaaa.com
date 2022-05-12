import { NextPage } from "next";
import { increment, decrement, selectVal } from "src/slices/valSlice";
import { useAppDispatch, useAppSelector } from "@hooks/redux";

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  const val = useAppSelector(selectVal);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1>krishna kumar</h1>
      <div className="space-x-4">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span>{val}</span>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Index;
