import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-[97.5%] m-[1.25%] z-999 rounded-xl fixed top-0 font-bold flex px-8 flex-row items-center justify-center h-16 bg-white shadow-lg shadow-black/25">
            {/* i want to have a little guitar widget here just for funsies ?? like the user could click a string at a certain fret and it would make the corresponding tone IDK */}
            <div className="flex flex-row gap-8">
                {/* TODO: turn these into proper components and schtuff later */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Students</NavLink>
                <NavLink to="/educators">Educators</NavLink>
            </div>
        </nav>
    );
}
