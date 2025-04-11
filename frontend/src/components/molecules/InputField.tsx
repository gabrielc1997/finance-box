import { Button } from '../atoms/Button';

export const InputField = () => (
  <div className="flex flex-col gap-1">
    <label htmlFor="input">Label</label>
    <input id="input" className="border p-2 rounded" />
    <Button>Enviar</Button>
  </div>
);
