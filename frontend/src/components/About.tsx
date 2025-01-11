export default function About() {
  return (
    <div className="w-[95%] p-12 flex flex-col gap-8 items-center mx-auto h-screen bg-white rounded-3xl shadow-lg shadow-black/50">
      <h1 className="text-4xl w-full max-w-192 font-bold flex flex-col mb-4 items-center">
        <span className=" self-start -mb-2">Make learning the guitar </span>
        <span className="self-end text-7xl">that much easier!</span>
      </h1>
      <p className="flex flex-col text-center">
        We've all been there. We want to learn how to play a new instrument! We
        want to learn how to play our favourite songs!{" "}
        <span className="text-2xl font-bold">
          Unfortunately, many worries plague us before we even begin:
        </span>
      </p>
      {/* little word cloud graphic of worries and whatnot, little emoji icons too */}
      <div className="h-48 w-full bg-slate-400/50"></div>
      <p></p>
    </div>
  );
}
