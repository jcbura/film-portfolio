import { useEffect } from "react";

const useKeyPress = (targetKeys: string[], action: (key: string) => void) => {
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

export default useKeyPress;
