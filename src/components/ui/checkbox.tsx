import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { Label } from '@/components/ui/label';

import {
  Controller,
  FieldValues,
  RegisterOptions,
  Control,
} from 'react-hook-form';

import { cn } from '@/lib/utils';

const CheckboxModel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: string;
  }
>(({ label, className, ...props }, ref) => (
  <div className="items-top flex space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  </div>
));

const Checkbox: React.FC<CheckboxProps> = ({
  control,
  name,
  label,
  rules,
  className,
  containerclass,
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={containerclass}>
            <CheckboxModel
              {...field}
              label={label}
              className={className}
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked)}
            />
            {error && (
              <Label className="text-error text-xs">{error.message}</Label>
            )}
          </div>
        );
      }}
    />
  );
};

export { Checkbox, CheckboxModel };

interface CheckboxProps {
  control?: Control<FieldValues>; // O tipo do 'control' vindo do React Hook Form
  name: string; // O nome do campo, como string
  label?: string; // Label opcional para o checkbox
  rules?: RegisterOptions; // As opções de validação para o campo
  className?: string; // Opções de estilização para o input
  containerclass?: string; // Opções de estilização para o container do input
}

/**
 * {@link https://ui.shadcn.com/docs/components/checkbox}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/744685605/Documenta+o+do+componente+Checkbox}.
 */
