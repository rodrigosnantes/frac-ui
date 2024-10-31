import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Checkbox
            control={control}
            name="Rodrigo"
            label="dasdasd"
            rules={{ required: 'Nome de usuário é obrigatório' }}
            containerclass="mb-3"
          />
          <Checkbox
            control={control}
            name="Rodrigo"
            label="dasdasd"
            rules={{ required: 'Nome de usuário é obrigatório' }}
            containerclass="mb-3"
          />
          <Checkbox
            control={control}
            name="Rodrigo"
            label="dasdasd"
            rules={{ required: 'Nome de usuário é obrigatório' }}
            containerclass="mb-3"
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
