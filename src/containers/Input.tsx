import React, { useRef } from 'react';

export const Input = () => {
    const dataRef = useRef(null);
    // console.log(dataRef.current?.files[0]);

    return (
        <>
            <label htmlFor="myfile"></label>
            <input type="file" id="myfile" name="myfile" ref={dataRef}></input>
        </>
    );
};
