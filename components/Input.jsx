import React from "react";

// Use forwardRef so parent can get a ref to the input element
const Input = React.forwardRef(function Input({ label, ...props }, ref) {
    return (
        <label className="block mb-4">
            {label && <span className="block mb-1 text-gray-700 font-medium">{label}</span>}
            <input
                ref={ref}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...props}
            />
        </label>
    );
});

export default Input;
