import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';



const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/60',
        outline: 'border border-input bg-background hover:bg-primary/60',
        link: 'text-primary underline-offset-4 hover:bg-primary/60',
        error: 'bg-error text-destructive-foreground hover:bg-error/60',
        success: 'bg-success text-destructive-foreground hover:bg-success/60',
        info: 'bg-info text-destructive-foreground hover:bg-info/60',
        warning: 'bg-warning text-destructive-foreground hover:bg-warning/60',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-5',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };

/**
 * {@link https://ui.shadcn.com/docs/components/button}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/747044877/Documenta+o+do+Componente+Button}.
 */