import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-primary-foreground',
        success: 'bg-success text-primary-foreground',
        info: 'bg-info text-primary-foreground',
        error: 'bg-error text-primary-foreground',
        warning: 'bg-warning text-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * {@link https://ui.shadcn.com/docs/components/alert}.
 */

const AlertModel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));

const Alert: React.FC<AlertProps> = ({
  modelSettings,
  titleSettings,
  descriptionSettings,
  childrenSettings,
}) => {
  return (
    <AlertModel
      className={modelSettings?.className}
      variant={modelSettings?.variant || 'default'}
    >
      <AlertTitle className={titleSettings?.className}>
        {titleSettings.title}
      </AlertTitle>

      {descriptionSettings?.description && (
        <AlertDescription className={descriptionSettings?.className}>
          {descriptionSettings.description}
        </AlertDescription>
      )}

      {childrenSettings?.children && (
        <div className={childrenSettings?.className}>
          {childrenSettings.children}
        </div>
      )}
    </AlertModel>
  );
};

export { Alert, AlertModel, AlertTitle, AlertDescription };

export type ModelSettings = {
  className?: string;
  variant?: 'default' | 'success' | 'info' | 'error' | 'warning';
};

export type TitleSettings = {
  className?: string;
  title: string;
};

export type DescriptionSettings = {
  className?: string;
  description?: string;
};

export type ChildrenSettings = {
  className?: string;
  children?: React.ReactNode;
};

export type AlertProps = {
  modelSettings?: ModelSettings;
  titleSettings: TitleSettings;
  descriptionSettings?: DescriptionSettings;
  childrenSettings?: ChildrenSettings;
};
