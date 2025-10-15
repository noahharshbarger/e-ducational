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

export default function Button({ children, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            className="px-4 rounded bg-fuchsia-500 text-white font-semibold shadow-lg hover:bg-white transition mr-4 hover:text-black animate-bounce disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onClick}
            disabled={onClick ? false : true}
            >
                {children}
            </button>
    )
}
