"use client";

import { useState } from "react";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "../../app/lib/Redux/Slices/Playground/PlaygroundSlice";
import { useAppDispatch, useAppSelector } from "../lib/Redux/Hooks";

export function Playground() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const btnClass =
    "m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  return (
    <div>
      <div>
        <button
          className={btnClass}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className={btnClass}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <form className="m-2">
        <label
          htmlFor="number-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Increment value:
        </label>
        <input
          type="number"
          id="number-input"
          value={incrementAmount}
          aria-describedby="helper-text-explanation"
          className={inputClass}
          onChange={(e) => setIncrementAmount(e.target.value)}
          placeholder="Enter increment value"
          required
        />
      </form>
      <div>
        <button
          className={btnClass}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={btnClass}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={btnClass}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
