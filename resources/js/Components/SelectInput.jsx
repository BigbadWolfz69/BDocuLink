import React from 'react';

const SelectInput = ({ children, ...props }) => {
    return (
        <select {...props}>
            {children}
        </select>
    );
};

export default SelectInput;
