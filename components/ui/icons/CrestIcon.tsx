interface IconProps {
  className?: string;
}

export function CrestIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2l7 4v6c0 5.25-3.5 10-7 12-3.5-2-7-6.75-7-12V6l7-4z" />
      <path d="M12 7v10M8.5 11l3.5-3.5 3.5 3.5" />
    </svg>
  );
}
