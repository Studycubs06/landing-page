const SectionDivider = ({ variant = "dots" }: { variant?: "dots" | "wave" | "line" }) => {
  if (variant === "wave") {
    return (
      <div className="relative h-12 overflow-hidden bg-transparent">
        <svg viewBox="0 0 1440 48" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 48h1440V24c-240 20-480-20-720 0S240 4 0 24v24z" fill="hsl(var(--muted))" />
        </svg>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="h-px w-16 bg-border" />
        <div className="mx-3 w-2 h-2 rounded-full bg-primary" />
        <div className="h-px w-16 bg-border" />
      </div>
    );
  }

  // dots (default)
  return (
    <div className="flex items-center justify-center py-8 gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
      <div className="w-2 h-2 rounded-full bg-primary" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
    </div>
  );
};

export default SectionDivider;
