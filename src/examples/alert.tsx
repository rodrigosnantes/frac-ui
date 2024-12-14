import React from 'react';
import { Alert } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';

const AlertSimpleExample: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-96">
        <Alert
          titleSettings={{
            title: 'Titulo qualquer',
          }}
        />
      </div>
    </div>
  );
};

const AlertSubtitleExample: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-96">
        <Alert
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
      </div>
    </div>
  );
};

const AlertChildrenExample: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-96">
        <Alert
          childrenSettings={{
            children: <Label>Any children</Label>,
          }}
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
      </div>
    </div>
  );
};

const AlertVariantsExample: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-96 flex flex-col gap-4">
        <Alert
          modelSettings={{ variant: 'default' }}
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
        <Alert
          modelSettings={{ variant: 'error' }}
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
        <Alert
          modelSettings={{ variant: 'info' }}
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
        <Alert
          modelSettings={{ variant: 'success' }}
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
        <Alert
          modelSettings={{ variant: 'warning' }}
          titleSettings={{ title: 'Alert Title' }}
          descriptionSettings={{ description: 'Alert description' }}
        />
      </div>
    </div>
  );
};

export {
  AlertSimpleExample,
  AlertSubtitleExample,
  AlertChildrenExample,
  AlertVariantsExample,
};
