export default function Navbar() {
    return (
        <nav className='w-full font-bold flex px-8 flex-row items-center justify-between h-16 bg-white shadow-lg shadow-black/25'>
            <div className=''>
                {/* logo */}
                <h1 className='text-xl'>Paper Strings</h1>
            </div>
            {/* i want to have a little guitar widget here just for funsies ?? IDK */}
            <div className='flex flex-row gap-8'>
                {/* TODO: turn these into proper components and schtuff later */}
                <a href=''>Home</a>
                <a href=''>Students</a>
                <a href=''>Educators</a>
            </div>
        </nav>
    );
}
