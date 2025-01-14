import * as React from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputModel = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

InputModel.displayName = 'Input';

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & {
    name: string;
    label?: string;
    control?: any;
    rules?: RegisterOptions;
  }
>(({ className, control, type, rules, label, ...props }, ref) => {
  return (
    <Controller
      name={props.name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <React.Fragment>
            {label && <Label className="">{label}</Label>}
            <InputModel
              {...field}
              {...props}
              ref={ref}
              type={type || InputTypes.text}
              className={className}
            />
            {error && <Label className="text-error text-xs">{error.message}</Label>}
          </React.Fragment>
        );
      }}
    />
  );
});
InputModel.displayName = 'Input';

enum InputTypes {
  'text' = 'text',
  'file' = 'file',
  'number' = 'number',
  'password' = 'password',
  'hidden' = 'hidden',
  'email' = 'email',
  'date' = 'date',
  'color' = 'color',
  'week' = 'week',
  'time' = 'time',
}

export { InputModel, Input, InputTypes };

/**
 * {@link https://ui.shadcn.com/docs/components/input}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/743702529/Documenta+o+do+componente+Input}.
 */
