export default function Input({ label, ...props }) {
    return (
        <label className="block mb-4">
            {label && <span className="block mb-1 text-gray-700 font-medium">{label}</span>}
            <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...props}
                />
        </label>
    )
}
