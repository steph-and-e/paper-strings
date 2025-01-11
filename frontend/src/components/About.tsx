export default function About() {
  return (
    <div className="w-[95%] p-12 flex flex-col gap-4 items-center mx-auto h-screen bg-white rounded-3xl shadow-lg shadow-black/50">
      <h1 className="text-4xl w-full max-w-192 font-bold flex flex-col mb-4 items-center">
        <span className=" self-start -mb-2">Make learning the guitar </span>
        <span className="self-end text-7xl">that much easier!</span>
      </h1>
      <div className="w-full mb-8 bg-slate-500/50 h-128 flex flex-row gap-4">
        {/* component for money saving */}
        {/* component for beginner-friendly */}
        {/* component for educator-friendly */}
      </div>
      <p>Interested? Let's get started!</p>
      <div className="flex flex-row gap-4">
        <button>For learners</button>
        <button>For educators</button>
      </div>
    </div>
  );
}
