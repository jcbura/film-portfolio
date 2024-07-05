import { useEffect, useState } from "react";

export const useKeyPress = (
  targetKeys: string[],
  action: (key: string) => void
) => {
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (targetKeys.includes(event.key)) {
        action(event.key);
      }
    };

    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [targetKeys, action]);
};

export const useMouseMoving = (debounceTime: number = 300): boolean => {
  const [isMouseMoving, setIsMouseMoving] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsMouseMoving(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMouseMoving(false), debounceTime);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [debounceTime]);

  return isMouseMoving;
};
