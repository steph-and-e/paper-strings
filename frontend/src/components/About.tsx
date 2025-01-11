import AboutCard from "./AboutCard";
import money from "../assets/img/money.png";
import learn from "../assets/img/learn.png";
import teach from "../assets/img/teach.png";

export default function About() {
    return (
        <div className="w-[95%] p-12 flex flex-col gap-4 items-center mx-auto bg-white rounded-3xl shadow-lg">
            <h1 className="text-4xl w-full max-w-192 font-bold flex flex-col mb-4 items-center">
                <span className=" self-start -mb-2">
                    Make learning the guitar{" "}
                </span>
                <span className="self-end text-7xl">that much easier!</span>
            </h1>
            <div className="w-full gap-12 mt-8 flex flex-row mb-16">
                <AboutCard
                    img={money}
                    title="Save money!"
                    body="Learn notes and chord positions without a physical instrument!"
                />
                <AboutCard
                    img={learn}
                    title="Learn quickly!"
                    body="Improve your muscle memory and finger positioning using just your webcam!"
                />
                <AboutCard
                    img={teach}
                    title="Teach with ease!"
                    body="Our modular lesson-creation interface allows you to develop your curriculum with speed!"
                />
            </div>
            <p>Interested? Let's start your musical journey!</p>
            <div className="flex flex-row gap-4">
                <button>For learners</button>
                <button>For educators</button>
            </div>
        </div>
    );
}
