const Loading: React.FC = ({ size = 'sm' }: LoadingProps) => {
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-20 w-20',
    lg: 'h-40 w-40',
    xl: 'h-60 w-60',
  };

  return (
    <div
      className={`border-gray-300 ${sizes[size]} animate-spin rounded-full border-8 border-t-blue-600`}
    />
  );
};

export type LoadingProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export { Loading };
