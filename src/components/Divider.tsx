import Crown from "./Crown";

type DividerProps = {
  className?: string;
  tone?: "gold" | "goldOnDark";
};

/** Gold divider system: thin double rules with a centered crown mark. */
export default function Divider({ className = "", tone = "gold" }: DividerProps) {
  const color = tone === "goldOnDark" ? "text-gold-bright/80" : "text-gold";
  return (
    <div
      className={`flex items-center gap-4 ${color} ${className}`}
      aria-hidden="true"
    >
      <span className="hairline-gold flex-1" />
      <span className="relative -top-px flex flex-col items-center">
        <Crown className="h-5 w-7" strokeWidth={2.4} />
      </span>
      <span className="hairline-gold flex-1" />
    </div>
  );
}
