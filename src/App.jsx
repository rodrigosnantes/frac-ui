import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import { Form, useGlobalFormContext, useFormState } from '@/components/ui/form';
import { useCallback } from 'react';

export default function App() {
  const handleSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <Form
      validationMode="onSubmit"
      onSubmit={handleSubmit}
      defaultValues={{
        option: 1,
      }}
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

          <Select
            name="option"
            placeholder="Estado"
            label="Selecione um estado"
            selectLabel="Selecione ao menos uma opção"
            rules={{ required: 'Campo obrigatório' }}
            options={[
              { name: 'MS', value: 1 },
              { name: 'SC', value: 2 },
              { name: 'MG', value: 3 },
            ]}
          />

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
