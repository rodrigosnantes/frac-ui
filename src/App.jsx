// import { Select } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { Tooltip } from '@/components/ui/tooltip';
// import { useForm } from 'react-hook-form';
// import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

export default function App() {
  return (
    <div className=" w-96 gap-2 flex flex-col">
      <Button variant="success" onClick={() => console.log('success')}>
        success
      </Button>
      <Button variant="info" onClick={() => console.log('info')}>
        info
      </Button>
      <Button variant="error" onClick={() => console.log('error')}>
        error
      </Button>
      <Button variant="warning" onClick={() => console.log('warning')}>
        warning
      </Button>
    </div>
  );

  // const { handleSubmit, control, reset } = useForm({
  //   defaultValues: { switch: true },
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // const onReset = () => {
  //   reset();
  // };

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
