import Image from "next/image";
import classNames from "classnames";


export default function SkillsCard({nama, level, image, className}) {

  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <Image
        src={image}
        alt="javascript"
        className={classNames("mr-6", className)}
        width={60}
        height={50}
      />
      <div>
        <h4 className="text-lg font-semibold">{nama}</h4>
        <p className="text-sm text-gray-600 font-semibold mt-1">{level}</p>
      </div>
    </div>
  );
}
