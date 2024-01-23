import Image from "next/image";

export default function ProjectItem({ nama, image, description }) {
  return (
    <article className="text-center">
      <Image
        src={image}
        alt="web_projects1"
        className="rounded-lg"
        width={800}
        height={500}
      />
      <h3 className="text-2xl font-semibold mt-4 mb-1">{nama}</h3>
      <p className="text-lg text-gray-400 ">{description}</p>
    </article>
  );
}
