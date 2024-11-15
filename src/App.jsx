import { Popover } from '@/components/ui/popover';
import { Input, InputTypes } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';

export default function App() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div>
        <div>
          <Popover
            elementTrigger={<Button variant="outline">Open popover</Button>}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  type={InputTypes.text}
                  placeholder="Email"
                  name="Rodrigo"
                  control={control}
                />
              </div>

              <button type="submit">Enviar</button>
            </form>
          </Popover>
        </div>
      </div>
    </div>
  );
}
