import Image from "next/image";

type BrandIconProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandIcon({ className = "h-12 w-12", priority = false }: BrandIconProps) {
  return (
    <span className={`relative flex shrink-0 overflow-hidden ${className}`}>
      <Image
        src="/brand-icon.png"
        alt=""
        fill
        priority={priority}
        sizes="48px"
        className="object-contain"
      />
    </span>
  );
}
