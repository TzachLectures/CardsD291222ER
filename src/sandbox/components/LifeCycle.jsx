import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  //יש להוסיף בעמוד כפתור וטיפוגרפי
  //הטיפוגרפי מציגה את המספר 0
  //בלחיצה על הכפתור המספר עולה ל1,2 וכן הלאה..

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Log in the component mount");
    return () => {
      console.log("The component is unMount");
    };
  }, []);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };

  console.log("every render");

  return (
    <div>
      <Button onClick={handleInc}>+</Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
