import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { Form, useGlobalFormContext, useFormState } from '@/components/ui/form';
import { useCallback } from 'react';

export default function App() {
  const handleSubmit = (data) => {
    console.log('data', data);
  };


  return (
    <Form
      validationMode="onChange"
      onSubmit={handleSubmit}
      // defaultValues={{ name: 'rodrigo', sobrenome: 'Nantes' }}
    >
      <FormContent />
    </Form>
  );
}

function FormContent() {
  const { reset, getFieldErrors, clearForm, setValue } = useGlobalFormContext();
  const res = useFormState();

  const handleReset = () => {
    reset();
  };

  const ClearForm = () => {
    clearForm();
  };

  const showErrorsForm = () => {
    const formErrors = getFieldErrors();
    console.log(formErrors);
  };

  const setNameValue = useCallback(() => {
    setValue('name', 'Rodrigo Nantes 123');
  }, [setValue]);

  const checkFormContext = useCallback(() => {
    console.log('res', res);
  }, [res]);

  return (
    <div className="w-full mt-9 flex justify-center">
      <div className="w-96">
        <div className="gap-2 flex flex-col">
          <Input
            name="name"
            placeholder="Nome"
            rules={{ required: 'Campo Obrigatório' }}
          />

          <Input
            name="sobrenome"
            placeholder="sobrenome"
            rules={{ required: 'Campo Obrigatório' }}
          />

          <Input
            name="email"
            placeholder="Email"
            rules={{ required: 'Campo Obrigatório' }}
          />

          <Checkbox name="gender" />
        </div>

        <div className="flex gap-4 flex-wrap mt-4">
          <Button type="button" onClick={handleReset}>
            Reset form
          </Button>

          <Button type="button" onClick={setNameValue}>
            set name
          </Button>

          <Button type="button" onClick={showErrorsForm}>
            get form Erros
          </Button>

          <Button type="button" onClick={ClearForm}>
            Clear form
          </Button>

          <Button type="button" onClick={checkFormContext}>
            check formContext
          </Button>

          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
  );
}
