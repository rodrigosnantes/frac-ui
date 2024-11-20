import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip } from '@/components/ui/tooltip';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export default function App() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { switch: true },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <>
      <AlertDialog
        title="Rodrigo"
        subtitle="Algo aqui"
        elementTrigger={<Button variant="outline">tezte</Button>}
      />
    </>
  );

  // return (
  //   <div className="w-full min-h-screen flex items-center justify-center">
  //     <form
  //       onSubmit={handleSubmit(onSubmit)}
  //       defaultValue={{
  //         switch: true,
  //       }}
  //     >
  //       <div>
  //         {/* <Select
  //           control={control}
  //           name="select"
  //           rules={{ required: 'Campo obrigatório' }}
  //           placeholder="Selecione uma fruta"
  //           options={[
  //             { name: 'Manga', value: 'Manga' },
  //             { name: 'Melancia', value: 'Melancia' },
  //           ]}
  //         />

  //         <Switch name="switch" control={control} label="Rodrigo" /> */}
  //       </div>

  //       <div className="mt-5 flex gap-4 justify-end">
  //         <button type="submit" className="border-2 p-1">
  //           Enviar
  //         </button>
  //         <button type="button" onClick={() => onReset()}>
  //           limpar
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
}
