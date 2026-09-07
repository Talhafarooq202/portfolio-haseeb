interface SectionHeadingProps {
  title: string;
  variant?: "navy" | "rust";
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  variant = "navy",
  align = "center",
}: SectionHeadingProps) {
  const isRust = variant === "rust";

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2
        className={`font-bold tracking-tight ${
          isRust
            ? "text-lg uppercase text-rust sm:text-xl md:text-2xl"
            : "text-xl text-navy sm:text-2xl md:text-[28px]"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-3 block h-px w-16 bg-navy/35 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
