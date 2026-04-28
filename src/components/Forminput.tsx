import LabelInput from "./ui/Labelinput";
import InputText from "./ui/InputText";

interface formInputProps {
  text: string;
  type: string;
  name: string;
  register: any;
  error?: string;
}

const FormInput: React.FC<formInputProps> = ({
  text,
  type,
  name,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <LabelInput text={text} title={name} />
      <InputText type={type} name={name} error={error} {...register(name)} />

      {/* {error && <p className="text-red-500">{error}</p>} */}
    </div>
  );
};

export default FormInput;
