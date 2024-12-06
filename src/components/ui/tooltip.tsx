import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

/**
 * {@link https://ui.shadcn.com/docs/components/tooltip}.
 */

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipModel = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipProps
>(
  (
    {
      className,
      triggerSettings,
      contentSettings,
      delayDuration = 100, // tempo em milissegundos que o tooltio irá aparecer após o hover o elementTrigger
      defaultOpen = false,
      onOpenChange = undefined, // função de callback que é executada no gatilho de exibição do elementTrigger
      ...props
    },
    ref
  ) => (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipModel defaultOpen={defaultOpen} onOpenChange={onOpenChange}>

        <TooltipTrigger className={triggerSettings?.className} asChild>
          {triggerSettings.children}
        </TooltipTrigger>

        <TooltipContent
          ref={ref}
          {...props}
          sideOffset={contentSettings?.sideOffset}
          className={contentSettings?.className}
        >
          {contentSettings.children}
        </TooltipContent>
        
      </TooltipModel>
    </TooltipProvider>
  )
);
Tooltip.displayName = TooltipPrimitive.Content.displayName;

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  triggerSettings: {
    children: React.ReactNode;
    className?: string;
  };
  contentSettings: {
    children: React.ReactNode;
    className?: string;
    sideOffset?: number; // distancia que o tooltip irá aparecer com relação ao elementTrigger
  };
  delayDuration?: number;
  defaultOpen?: boolean; //
  onOpenChange?: (open: boolean) => void;
}

export {
  Tooltip,
  TooltipModel,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
