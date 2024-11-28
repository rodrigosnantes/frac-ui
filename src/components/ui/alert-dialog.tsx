import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

/**
 * {@link https://ui.shadcn.com/docs/components/alert-dialog}.
 */

const AlertDialogModel = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  subtitle,
  elementTrigger,
  cancelSettings = {
    show: true,
    callback: null,
  },
  confirmSettings = {
    show: true,
    callback: null,
  },
  rootSettings,
  elementTriggerSettings,
  contentSettings,
  headerSettings,
  footerSettings,
}) => {
  const [open, setOpen] = React.useState(rootSettings?.open || false);

  const handleCancel = React.useCallback(() => {
    cancelSettings?.callback?.();
    if (cancelSettings?.skipPattern) return;
    setOpen(false);
  }, [cancelSettings]);

  const handleConfirm = React.useCallback(() => {
    confirmSettings?.callback?.();
    if (cancelSettings?.skipPattern) return;
    setOpen(false);
  }, [confirmSettings]);

  return (
    <AlertDialogModel open={open}>
      <AlertDialogTrigger
        onClick={() => setOpen(true)}
        className={elementTriggerSettings?.className}
      >
        {elementTrigger}
      </AlertDialogTrigger>

      <AlertDialogContent className={contentSettings?.className}>
        <AlertDialogHeader className={headerSettings?.className}>
          <AlertDialogTitle className={headerSettings?.titleClasses}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className={headerSettings?.subTitleClasses}>
            {subtitle}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className={footerSettings?.className}>
          {!cancelSettings?.show ? null : (
            <Button
              disabled={cancelSettings?.disabled}
              variant="outline"
              onClick={handleCancel}
              className={cancelSettings?.className}
            >
              {cancelSettings?.label || 'Cancel'}
            </Button>
          )}

          {!confirmSettings?.show ? null : (
            <Button
              disabled={confirmSettings?.disabled}
              onClick={handleConfirm}
              className={confirmSettings?.className}
            >
              {confirmSettings?.label || 'Continue'}
            </Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogModel>
  );
};

export {
  AlertDialog,
  AlertDialogModel,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
};

export type AlertDialogProps = {
  title?: string;
  subtitle?: string;
  elementTrigger: React.ReactNode;
  rootSettings?: rootProps;
  elementTriggerSettings?: defaultProps;
  contentSettings?: defaultProps;
  headerSettings?: headerProps;
  footerSettings?: defaultProps;
  cancelSettings?: actionButtonProps;
  confirmSettings?: actionButtonProps;
};

export type defaultProps = {
  className?: string;
};

export type rootProps = defaultProps & {
  open?: boolean;
};
export type headerProps = defaultProps & {
  className?: string;
  titleClasses: string;
  subTitleClasses: string;
};

export type actionButtonProps = defaultProps & {
  label?: string;
  callback?: any;
  disabled?: boolean;
  show?: boolean;
  skipPattern?: boolean; // deve ignorar o comportamento padrão do dialogo
};
