export default function ToggleButton(props) {
    const { on, callback, children } = props;

    return (
        <button
            onClick={callback}
            className={"px-4 py-2 text-xl font-semibold rounded-lg transition duration-200 " + (on ? "bg-blue-400 hover:bg-blue-500" : "bg-gray-300 hover:bg-gray-400")}
        >
            {children}
        </button>
    )
}

