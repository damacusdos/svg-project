interface IconProps {
  icon: string;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  return (
    <svg className={`h-6 w-6 ${className}`}>
      <use href={`/src/assets/${icon}.svg#${icon}`} />
    </svg>
  );
};
