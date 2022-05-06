import { NextPage } from "next";
import { increment, decrement, selectVal } from "src/features/valSlice";
import { useAppDispatch, useAppSelector } from "@hooks/redux";

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  const val = useAppSelector(selectVal);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
      <p>krishnaaa.com</p>
      <div className="space-x-4">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{val}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default Index;
