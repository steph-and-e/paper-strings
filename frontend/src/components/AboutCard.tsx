interface AboutCardProps {
    img: string;
    title: string;
    body: string;
}

export default function AboutCard({ img, title, body }: AboutCardProps) {
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <img className="max-h-48 aspect-auto" src={img} />
            <h3 className="text-4xl font-stretch-expanded font-bold">
                {title}
            </h3>
            <p className="text-center">{body}</p>
        </div>
    );
}
