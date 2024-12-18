import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ActivityIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';

const AccordionSimpleExample: React.FC = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className="w-96">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

const AccordionCustomTriggerExample: React.FC = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className="w-96">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-4">
                <Button>
                  <ActivityIcon />
                </Button>
                <Label>Accordion 01</Label>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-4">
                <Button>
                  <ActivityIcon />
                </Button>
                <Label>Accordion 02</Label>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-4">
                <Button>
                  <ActivityIcon />
                </Button>
                <Label>Accordion 03</Label>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export { AccordionSimpleExample, AccordionCustomTriggerExample };
