interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`rounded-lg px-2 py-3 bg-white border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};
