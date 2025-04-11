export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-2xl text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-pink-600 text-white hover:bg-pink-700 px-6 py-3 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}