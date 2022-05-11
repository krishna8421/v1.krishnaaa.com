import { NextPage } from "next";
import { increment, decrement, selectVal } from "src/slices/valSlice";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { event } from "nextjs-google-analytics";
import { GOOGLE_ANALYTICS_ID } from "@constants/index";

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  const val = useAppSelector(selectVal);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1>krishnaaa.com</h1>
      <div className="space-x-4">
        <button
          onClick={() => {
            dispatch(decrement());
            event(
              "click",
              {
                category: "button",
                label: "decrement",
                value: 1,
              },
              GOOGLE_ANALYTICS_ID,
            );
          }}
        >
          -
        </button>
        <span>{val}</span>
        <button
          onClick={() => {
            dispatch(increment());
            event(
              "click",
              {
                category: "button",
                label: "increment",
                value: 1,
              },
              GOOGLE_ANALYTICS_ID,
            );
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Index;
