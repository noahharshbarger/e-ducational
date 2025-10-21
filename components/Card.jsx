export default function Card({ title, children, className = ""}) {
    return (
        <div className={`bg-white rounded-xl shadow p-6 ${className}`}>
            {title && <h1 className="text-2xl font-semibold mb-2">{title}</h1>}
            {children}
        </div>
    )
}
