import React,{ useState,useCallback } from "react";

const Button = 
    React.memo(({onClick,text}) => {
        console.log(`Rendering button - ${text}`);
        return(
            <button onClick={onClick}>{text}</button>
        )
    })

export function CallBack() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const theme={
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
  return (
    <div style={theme}>
      <p>Count :{count}</p>
      <Button
      onClick={increment}
      text={'Increment'}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}