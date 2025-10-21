// Example usage:
// import Button from "@/components/Button";
//
// <Button onClick={() => alert('Clicked!')}>Click Me</Button>
//
// <Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
//
// <Button disabled className="opacity-50 cursor-not-allowed">Disabled</Button>

// export default function Button({ children, onClick, type = "button", className = "" }) {
//   return (
//     <button
//       type={type}
//       className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

export default function Button({ children, onClick, type = "button", disabled = false, className = "" }) {
    // Button component for reusable styled buttons
    // 'type' prop allows use as 'submit' for forms or 'button' for actions
    // 'onClick' handles click events (optional for form submit)
    // 'disabled' prop controls whether the button is disabled
    // Only disables when 'disabled' is true, so forms can submit
    // 'className' lets you add extra Tailwind or custom classes
    return (
        <button
            type={type} // 'submit' for forms, 'button' for regular actions
            className="px-4 rounded bg-fuchsia-500 text-white font-semibold shadow-lg hover:bg-purple-500 transition mr-4 animate-pulse disabled:opacity-50 disabled:cursor-not-allowed" // Tailwind styling
            onClick={onClick} // Optional: only needed for button actions
            disabled={disabled} // Only disables if 'disabled' is true
        >
            {children}
        </button>
    )
}
