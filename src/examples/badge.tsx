import { Badge } from '@/components/ui/badge';

const BadgeSimpleExample: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Badge>Badge</Badge>
    </div>
  );
};

const BadgeCustomExample: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Badge className="bg-purple-500 p-3">Badge</Badge>
    </div>
  );
};

const BadgeVariantsExample: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <Badge variant="default">default</Badge>
      <Badge variant="outline">outlined</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="success">success</Badge>
    </div>
  );
};

export { BadgeSimpleExample, BadgeCustomExample, BadgeVariantsExample };
