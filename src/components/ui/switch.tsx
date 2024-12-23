import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { Controller, RegisterOptions } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const SwitchModel = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));
SwitchModel.displayName = SwitchPrimitives.Root.displayName;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    name: string;
    label?: string;
    classContainer?: string;
    control?: any;
    rules?: RegisterOptions;
  }
>(({ control, rules, className, classContainer, label, ...props }, ref) => {
  return (
    <Controller
      name={props.name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <div className={`flex items-center ${classContainer} gap-1`}>
              <SwitchModel
                ref={ref}
                {...props}
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className={className}
              />
              <Label>{label}</Label>
            </div>
            {error && (
              <Label className="text-error text-xs">{error.message}</Label>
            )}
          </>
        );
      }}
    />
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { SwitchModel, Switch };

/**
 * {@link https://ui.shadcn.com/docs/components/switch}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/744652820/Documenta+o+do+Componente+Switch}.
 */
