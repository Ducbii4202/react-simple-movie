import { useEffect, useState } from "react";

export default function useDebounce(intializeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(intializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue("");
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, intializeValue]);
  return debounceValue;
}
