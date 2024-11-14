// Input is text and number
// Output is a card that shows text as title, and number that animates from 0 to that number
"use client";
import React, { useEffect, useState } from "react";

export default function Counter({
  title,
  value,
  type="number",
}: {
  title: string;
  value: number;
  type?: string;

}) {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  let defaultTimer = 20;
  let defaultIncrement = value / defaultTimer;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        const newCount = count + defaultIncrement;
        if (Number.isInteger(value)) {
          setCount(Math.round(newCount));
        } else {
          setCount(parseFloat(newCount.toFixed(2)));
        }
      }
      else {
        setIsRunning(false);
        setCount(value);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, defaultTimer);

    return () => clearInterval(interval);
  }, [count, value]);

  const formatCount = (value: number) => {
    if (value >= 1000000) {
      const formattedValue = (value / 1000000).toFixed(1);
      return formattedValue.endsWith('.0') ? `${Math.round(value / 1000000)}M` : `${formattedValue}M`;
    } else if (value >= 1000) {
      const formattedValue = (value / 1000).toFixed(1);
      return formattedValue.endsWith('.0') ? `${Math.round(value / 1000)}K` : `${formattedValue}K`;
    }
    return value.toString();
  };

  return (
    <div className={`flex-auto p-4 border border-gray-500 rounded`}>
        <p className="text-sm text-gray-500">{title}</p>
        <p className={`text-2rem ${isRunning ? 'text-gray-500' : 'font-semibold text-white'}`}>
        {type === 'currency' && <span className="text-sm text-gray-500">AED </span>}
        {formatCount(count)}
      </p>
    </div>
  );
}