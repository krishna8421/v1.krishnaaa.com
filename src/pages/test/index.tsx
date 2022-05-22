import { NextPage } from "next";
import { increment, decrement, selectVal } from "src/slices/valSlice";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { Main } from "@layouts/Main";

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  const val = useAppSelector(selectVal);

  return (
    <Main>
      <div className="flex flex-col items-center justify-center text-white">
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
    </Main>
  );
};

export default Index;
