interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 24, className }: IconProps) => {
  return (
    <svg height={size} width={size} className={className}>
      <use href={`/src/assets/${name}.svg#${name}`} />
    </svg>
  );
};
