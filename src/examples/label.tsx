import { Label } from '@/components/ui/label';

const LabelSimpleExample: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Label>Simple Label</Label>
    </div>
  );
};

const LabelCustomExample: React.FC = () => {
  return (
    <div className="w-full gap-4 h-screen flex flex-col justify-center items-center">
      <Label className='border p-2'>Add border</Label>
      <Label className='font-light'>Custom font</Label>
      <Label className='text-xl'>Custom size</Label>
      <Label className='text-red-700'>Color</Label>
    </div>
  );
};


export { LabelSimpleExample, LabelCustomExample };
