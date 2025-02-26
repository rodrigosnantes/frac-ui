import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants, Button } from '@/components/ui/button';
import { Controller } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import {
  PopoverModel,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { useGlobalFormContext, useWatch } from './form';

/**
 * {@link https://ui.shadcn.com/docs/components/calendar}.
 * {@link https://daypicker.dev/}.
 */

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2 gap-1',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'outline' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

const FormCalendar: React.FC<FormCalendarProps> = ({ ...props }) => {
  return (
    <Controller
      name={props.name}
      control={props?.control}
      rules={props?.rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <React.Fragment>
            <Calendar
              {...field}
              {...props}
              selected={field.value} 
              onSelect={field.onChange}
              className={props?.className}
            />
            {error && (
              <Label className="text-error text-xs">{error.message}</Label>
            )}
          </React.Fragment>
        );
      }}
    />
  );
};

const InputCalendar: React.FC<InputCalendarProps> = ({
  triggerSettings,
  calendarSettings,
}: {
  triggerSettings: any;
  calendarSettings: FormCalendarProps;
}) => {
  const fieldValue = useWatch({ name: calendarSettings.name });
  const {
    getFieldErrors,
    register,
    setValue,
    clearErrors,
    trigger,
    validationMode,
  } = useGlobalFormContext();
  const error = getFieldErrors()?.[calendarSettings.name]?.message;

  const handleSelect = (date: any) => {
    setValue(calendarSettings.name, date);
    clearErrors(calendarSettings.name);
  };

  const handleValidation = async () => {
    if (validationMode !== 'onBlur') return;
    await trigger(calendarSettings.name);
  };

  const previewDate = React.useMemo(() => {
    if (!fieldValue) return <span>{triggerSettings?.placeholder}</span>;
    if (fieldValue?.length) {
      const [first] = fieldValue;
      return first?.toLocaleDateString();
    }
    if (fieldValue?.from) {
      const { from, to } = fieldValue;
      return `${from ? from?.toLocaleDateString() : '-'} - ${
        to ? to?.toLocaleDateString() : '-'
      }`;
    }
    return fieldValue?.toLocaleDateString();
  }, [fieldValue]);

  return (
    <React.Fragment>
      <input
        {...register(calendarSettings.name, calendarSettings.rules)}
        className="hidden"
      />

      <PopoverModel>
        <PopoverTrigger>
          {triggerSettings?.label && (
            <Label className="flex mb-2">{triggerSettings.label}</Label>
          )}
          <Button
            type="button"
            variant="outline"
            className={cn(
              'w-full font-normal px-3 py-2 hover:bg-slate-100',
              !fieldValue && 'text-muted-foreground'
            )}
          >
            {previewDate}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-0"
          align="start"
          onCloseAutoFocus={handleValidation}
        >
          <Calendar
            {...calendarSettings}
            selected={fieldValue}
            onSelect={handleSelect}
          />
        </PopoverContent>
      </PopoverModel>

      {error && <Label className="text-error text-xs">{error}</Label>}
    </React.Fragment>
  );
};

interface InputCalendarProps {
  triggerSettings: {
    placeholder?: string;
    label?: string;
    className?: string;
  };
  calendarSettings: {
    name: string;
    rules?: object;
    className?: string;
  };
}

interface FormCalendarProps {
  rules?: object;
  className?: string;
  [key: string]: any;
}

export { Calendar, FormCalendar, InputCalendar };

/**
 * {@link https://ui.shadcn.com/docs/components/calendar}.
 * {@link https://fractaleng.atlassian.net/wiki/spaces/~5dc59577ffc8c10df0edf1f9/pages/751992918/Documenta+o+do+componente+Calendar}.
 */
