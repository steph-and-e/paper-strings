interface TooltipProps {
    top: number;
    left: number;
    content: string;
}

export default function Tooltip({ top, left, content }: TooltipProps) {
    return (
        <div
            className="absolute bg-white/80 p-2 px-4 rounded-2xl border-gray-300 border-2"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            {content}
        </div>
    );
}
