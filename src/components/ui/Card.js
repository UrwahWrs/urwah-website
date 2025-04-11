
export function Card({ children, className = "" }) {
    return <div className={`bg-white p-4 rounded-3xl shadow-md border border-pink-100 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}
