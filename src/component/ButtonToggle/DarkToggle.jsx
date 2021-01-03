import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";

const DARK_CLASS = "dark";

export const DarkToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)"
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark);
      console.log(isDark)
    }
    
  );
    /*<>
      <button onClick={() => setIsDark(true)}>Dark</button>
      <button onClick={() => setIsDark(false)}>Light</button>
    </> */
  const [isDark, setIsDark] = useState(true);

     useEffect(() => {
       console.log(isDark)
       if (isDark) {
         document.documentElement.classList.add(DARK_CLASS)
       } else {
         document.documentElement.classList.remove(DARK_CLASS)
       }
     }, [isDark]);

  return (
    <Toggle
      className="DarkToggle"
      checked={isDark}
      onChange={ toggleEvent => setIsDark(toggleEvent.target.checked ? true : false) }
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode"
    />
  );
};