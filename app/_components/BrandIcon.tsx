import Image from "next/image";

type BrandIconProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandIcon({ className = "h-12 w-12", priority = false }: BrandIconProps) {
  return (
    <span className={`flex shrink-0 overflow-hidden ${className}`}>
      <Image
        src="/brand-icon.png"
        alt=""
        width={48}
        height={48}
        priority={priority}
        unoptimized
        className="h-full w-full object-contain"
      />
    </span>
  );
}
