import { Button } from '@/components/ui/button';
import { ActivityIcon } from 'lucide-react';

const ButtonSimpleExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button>Simple Button</Button>
    </div>
  );
};

const ButtonCustomExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button className="bg-purple-500 hover:bg-purple-200 hover:text-black">
        Simple Button
      </Button>
    </div>
  );
};

const ButtonSizeExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
      <Button size="default">default size</Button>
      <Button size="sm">sm size</Button>
      <Button size="lg">lg size</Button>
    </div>
  );
};

const ButtonIconExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button size="icon">
        <ActivityIcon />
      </Button>
    </div>
  );
};

const ButtonVariantsExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
      <Button variant="default">default Button</Button>
      <Button variant="outline">outline Button</Button>
      <Button variant="link">link Button</Button>
      <Button variant="error">error Button</Button>
      <Button variant="success">success Button</Button>
      <Button variant="info">info Button</Button>
      <Button variant="warning">warning Button</Button>
    </div>
  );
};

export {
  ButtonSimpleExample,
  ButtonCustomExample,
  ButtonSizeExample,
  ButtonIconExample,
  ButtonVariantsExample,
};
