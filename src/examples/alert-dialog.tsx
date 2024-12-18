import { AlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const AlertDialogSimpleExample: React.FC = () => {
  return (
    <AlertDialog
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
    ></AlertDialog>
  );
};

const AlertDialogTitleExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
    ></AlertDialog>
  );
};

const AlertDialogSubTitleExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      subtitle="Hello, i am a subtitle"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
    ></AlertDialog>
  );
};

const AlertDialogHiddenCancelExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      subtitle="Hello, i am a subtitle"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
      cancelSettings={{
        show: false,
      }}
    ></AlertDialog>
  );
};

const AlertDialogHiddenConfirmExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      subtitle="Hello, i am a subtitle"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
      confirmSettings={{
        show: false,
      }}
    ></AlertDialog>
  );
};

const AlertDialogCancelCallbackExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      subtitle="Hello, i am a subtitle"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
      cancelSettings={{
        show: true,
        callback: () => console.log('cancel custom action'),
      }}
    ></AlertDialog>
  );
};

const AlertDialogConfirmCallbackExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      subtitle="Hello, i am a subtitle"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
      confirmSettings={{
        show: true,
        callback: () => console.log('confirm custom action'),
      }}
    ></AlertDialog>
  );
};

const AlertDialogSkipPatterCallbackExample: React.FC = () => {
  return (
    <AlertDialog
      title="Title"
      subtitle="Hello, i am a subtitle"
      elementTriggerSettings={{
        className: 'flex h-screen w-full justify-center items-center',
        children: <Button>Open</Button>,
      }}
      confirmSettings={{
        show: true,
        skipPattern: true,
        callback: () => console.log('confirm custom action'),
      }}
      cancelSettings={{
        show: true,
        skipPattern: true,
        callback: () => console.log('cancel custom action'),
      }}
    ></AlertDialog>
  );
};

export {
  AlertDialogSimpleExample,
  AlertDialogTitleExample,
  AlertDialogSubTitleExample,
  AlertDialogHiddenCancelExample,
  AlertDialogHiddenConfirmExample,
  AlertDialogCancelCallbackExample,
  AlertDialogConfirmCallbackExample,
  AlertDialogSkipPatterCallbackExample
};
