import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        outline: 'text-foreground',
        error: 'bg-error',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };

/**
 * {@link https://ui.shadcn.com/docs/components/badge}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/746455057/Documenta+o+do+Componente+Badge}.
 */
