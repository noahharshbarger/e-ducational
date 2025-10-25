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

export default function Button({ children, onClick, type = "button", disabled = false, className = "", href, loading = false }) {
    // If href is provided, render as a link for navigation
    if (href) {
        return (
            <a
                href={href}
                className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-10 disabled:cursor-not-allowed ${className}`}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                onClick={e => {
                    if (disabled) e.preventDefault();
                    if (onClick) onClick(e);
                }}
            >
                {children}
            </a>
        );
    }
    // Otherwise, render as a button
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-10 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
            aria-busy={loading}
        >
            {loading ? (
                <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>
                    Loading...
                </span>
            ) : children}
        </button>
    );
}
