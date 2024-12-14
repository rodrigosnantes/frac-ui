import { Loading, LoadingProps } from '@/components/ui/loading';
import React from 'react';

const LoadingSimpleExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loading />
    </div>
  );
};

const LoadingCustomExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loading className="mr-4" />

      <div className="bg-black">div ref</div>
    </div>
  );
};

const LoadingSizeExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4">
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  );
};

export { LoadingSimpleExample, LoadingCustomExample, LoadingSizeExample };
