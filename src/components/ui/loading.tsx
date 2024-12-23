const Loading: React.FC<LoadingProps> = ({ size = 'sm', className = '' }) => {
  const sizeOptions = {
    sm: 'h-10 w-10',
    md: 'h-20 w-20',
    lg: 'h-40 w-40',
    xl: 'h-60 w-60',
  };

  return (
    <div
      className={`border-gray-300 ${sizeOptions[size]} animate-spin rounded-full border-8 border-t-blue-600 ${className}`}
    />
  );
};

type LoadingProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: String;
};

export { Loading, LoadingProps };

/**
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/751992904/Documenta+o+do+componente+Loading}.
 */
