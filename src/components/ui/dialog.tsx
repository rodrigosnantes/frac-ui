import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const DialogModel = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
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
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Dialog: React.FC<DialogProps> = ({
  dialogTrigger,
  dialog,
  header,
  footer,
  closeSetting,
  confirmSetting,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const nativeControlDialog = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    xxl: 'max-w-xl',
    full: 'max-w-full',
  };

  return (
    <DialogModel open={open} onOpenChange={nativeControlDialog}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent
        className={`${dialog?.size && sizes[dialog.size]} ${
          dialog?.customSize
        }`}
      >
        <DialogHeader>
          <DialogTitle>{header.title}</DialogTitle>
          <DialogDescription>{header.subtitle}</DialogDescription>
        </DialogHeader>

        <Separator />

        {children}

        <DialogFooter>
          {footer?.customAction}
          {closeSetting?.show && (
            <Button
              type="submit"
              onClick={() => {
                if (closeSetting?.callback) closeSetting?.callback();
                if (!closeSetting?.disableClose) nativeControlDialog();
              }}
            >
              {closeSetting?.text}
            </Button>
          )}
          {confirmSetting?.show && (
            <Button
              type="submit"
              onClick={() => {
                if (confirmSetting?.callback) confirmSetting?.callback();
                if (!closeSetting?.disableClose) nativeControlDialog();
              }}
            >
              {confirmSetting?.text}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </DialogModel>
  );
};

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

export type DialogProps = {
  dialog: {
    size?: 'md' | 'lg' | 'sm' | 'xl' | 'xxl' | 'full';
    customSize?: String;
  };
  dialogTrigger: React.ReactNode;
  header: { title: string; subtitle: string };
  footer?: { customAction?: React.ReactNode };
  closeSetting?: {
    show: boolean;
    text: string;
    callback?: () => void;
    disableClose?: boolean;
  };
  confirmSetting?: {
    show: boolean;
    text: string;
    callback?: () => void;
  };
  children: React.ReactNode;
};


/**
 * {@link https://ui.shadcn.com/docs/components/dialog}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/751960112/Documenta+o+do+Componente+Dialog}.
 */