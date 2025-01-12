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

    console.log(tooltips);

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
            {tooltips.filter((tt) => tt.page === currentPage).length > 0 ? (
                tooltips.map((tt) => {
                    console.log("ya");
                    return (
                        tt.page === currentPage && (
                            <Tooltip
                                top={tt.top}
                                left={tt.left}
                                content={tt.content}
                            />
                        )
                    );
                })
            ) : (
                <div className="flex flex-col gap-4 items-center justify-center text-white">
                    <h1 className="text-7xl font-bold">
                        Click anywhere to add an annotation!
                    </h1>
                    <h3 className="text-white/50">
                        Use the arrows on the left and right to navigate pages,
                        and use the + and - icons at the bottom to add or remove
                        pages!
                    </h3>
                </div>
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
