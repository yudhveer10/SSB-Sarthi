import Image from "next/image";
import brandIcon from "../icon.png";

type BrandIconProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandIcon({ className = "h-9 w-9", priority = false }: BrandIconProps) {
  return (
    <span className={`relative flex shrink-0 overflow-hidden rounded-lg ${className}`}>
      <Image
        src={brandIcon}
        alt=""
        fill
        priority={priority}
        sizes="44px"
        className="object-contain"
      />
    </span>
  );
}
