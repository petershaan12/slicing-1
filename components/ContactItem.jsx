import Image from "next/image";
import classNames from "classnames";
export default function ContactItem({ label, value, icon, className }) {
  return (
    <div className={classNames("flex items-start", className)}>
      <Image src={icon} alt={`icon_${label}`} width={30} height={30} />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
