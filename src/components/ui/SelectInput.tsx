interface Option {
  label: string;
  value: string;
}

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <select {...props} className={`border p-2 rounded-md ${error ? "border-red-500 bg-red-50" : "border-gray-300"}`}>
        <option value="">Pilih kategori</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectInput;