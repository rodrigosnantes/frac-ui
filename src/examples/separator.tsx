import { Separator } from '@/components/ui/separator';

const SeparatorHorizontalExample: React.FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">
            Horizontal Divider
          </h4>

          <Separator className="my-4" />

          <p className="text-sm text-muted-foreground">An horizontal divider</p>
        </div>
      </div>
    </div>
  );
};

const SeparatorVerticalExample: React.FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
};

const SeparatorCustomExample: React.FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">
            Custom Color Divider
          </h4>

          <Separator className="my-4 bg-purple-700" />

          <p className="text-sm text-muted-foreground">An Custom Divider</p>
        </div>
      </div>
    </div>
  );
};

export {
  SeparatorHorizontalExample,
  SeparatorVerticalExample,
  SeparatorCustomExample,
};
