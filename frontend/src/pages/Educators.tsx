import { useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import Tooltip from "../components/Tooltip";

interface TooltipInput {
    top: number;
    left: number;
    content: string;
    page: number;
}

export default function Educators() {
    const { x, y } = useMousePosition();
    const [tooltips, setTooltips] = useState<TooltipInput[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([0]);

    return (
        <div
            className="w-screen h-screen flex justify-center bg-purple"
            onClick={(e) => {
                const content = prompt("Enter tooltip message:");
                if (content) {
                    setTooltips((prev) => [
                        ...prev,
                        { top: y, left: x, content, page: currentPage },
                    ]);
                }
            }}
        >
            <h1 className="absolute top-48 text-9xl">{currentPage}</h1>
            {tooltips.map(
                (tt) =>
                    tt.page === currentPage && (
                        <Tooltip
                            top={tt.top}
                            left={tt.left}
                            content={tt.content}
                        />
                    )
            )}

            <div className="flex flex-row gap-4 absolute bottom-4 items-center">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log(pages);
                        setPages((prev) => prev.slice(0, -1));
                        setCurrentPage(pages.length - 2);
                        setTooltips((prev) =>
                            prev.filter((tt) => tt.page < pages.length - 1)
                        );
                    }}
                    className="w-12 h-12 flex items-center justify-center text-7xl"
                >
                    -
                </button>
                {pages.map((_, i) =>
                    i === currentPage ? (
                        <div className="bg-white/80 w-2 h-2 rounded-full"></div>
                    ) : (
                        <div className="bg-white/40 w-2 h-2 rounded-full"></div>
                    )
                )}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setPages((prev) => [...prev, 0]);
                        setCurrentPage(pages.length);
                    }}
                    className=" w-12 h-12 flex items-center justify-center text-7xl"
                >
                    +
                </button>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (currentPage < pages.length - 1) {
                        setCurrentPage((prev) => prev + 1);
                    }
                }}
                className="h-16 w-16 absolute right-8 top-1/2 flex items-center justify-center"
            >
                →
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (currentPage > 0) {
                        setCurrentPage((prev) => prev - 1);
                    }
                }}
                className="h-16 w-16 absolute left-8 top-1/2 flex items-center justify-center"
            >
                ←
            </button>
        </div>
    );
}
