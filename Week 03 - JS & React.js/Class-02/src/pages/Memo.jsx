import { useState, useMemo } from "react";
export function Memo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    const doubleNumber = useMemo(() => {
         slowFunction(number);
    }, []);

    return (
        <div style={theme}>
            <p>Double : {doubleNumber}</p>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>

        </div>
    );
}

function slowFunction(num) {
    console.log('Calling Slow Function');
    for (let i = 0; i < 10000000000; i++) {}
    return num * 2;
}
