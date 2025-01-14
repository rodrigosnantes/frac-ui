import * as React from 'react';

import { cn } from '@/lib/utils';
import { Controller, RegisterOptions } from 'react-hook-form';
import { Label } from '@/components/ui/label';


export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaModel = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextareaModel.displayName = 'Textarea';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & {
    name: string;
    label?: string;
    control: any;
    rules?: RegisterOptions;
  }
>(({ className, control, rules, label, ...props }, ref) => {
  return (
    <Controller
      name={props.name}
      control={control}
      // defaultValue={''}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            {label && <Label>{label}</Label>}
            <TextareaModel
              {...field}
              {...props}
              ref={ref}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              className={className}
            />
            {error && (
              <Label className="text-error text-xs">{error.message}</Label>
            )}
          </>
        );
      }}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea, TextareaModel };



/**
 * {@link https://ui.shadcn.com/docs/components/textarea}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/744554550/Documenta+o+do+Componente+Textarea}.
 */