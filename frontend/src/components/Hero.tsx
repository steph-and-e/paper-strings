import lines from "../assets/img/lines.png";
import circle from "../assets/img/circle corner.png";
import scribble from "../assets/img/scribble.png";
import rectangle from "../assets/img/rectangle.png";
import star from "../assets/img/star.png";
import grad from "../assets/img/bg_grad.png";
import logo from "../assets/img/paper strings icon.png";

export default function Hero() {
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden items-center justify-center">
            <img src={logo} className="w-72" alt="" />
            <h1 className="text-8xl font-stretch-expanded mb-6 font-bold">
                Paper Strings
            </h1>
            <h2 className="text-2xl">A new song in each fold!</h2>
            <img src={lines} className="absolute -z-50" alt="" />
            <img
                src={circle}
                className="absolute -right-8 -bottom-36 -z-50 w-108"
                alt=""
            />
            <img
                src={scribble}
                className="absolute left-0 -top-8 w-84"
                alt=""
            />
            <img
                src={rectangle}
                className="absolute -top-24 -right-24"
                alt=""
            />
            <img
                src={star}
                className="absolute left-0 -bottom-144 -z-50"
                alt=""
            />
            <img
                src={grad}
                className="absolute w-full left-0 -z-40 -bottom-[90%]"
            />
            {/* little ideas for the graphics
            - v music bars in background
            - v gradients (some blurry, some not) in the background, makes things more Lush
            - v obviously tons of music iconography, use glassy shapes + gradients just because those look clean
            - v thinking to just throw the logo on the hero page as well to take up space
            - scroll down arrow animation teehee
        */}
        </div>
    );
}
