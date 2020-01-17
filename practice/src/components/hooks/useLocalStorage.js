import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {

        // check if value is in array already
        // if so, remove the value
        // if the value is not in the array, add it
        if(storedValue.includes(value)){
            setStoredValue(storedValue.filter(val => {
                return val !== value;
            }))
        } else{
            setStoredValue([...storedValue, value]);
        }

        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue]
};