interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const InputText: React.FC<InputTextProps> = ({ error, ...props }) => {
  return (
    <div className="flex flex-col">
      <input
        {...props}
        className={`p-2 rounded-md outline-none border ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 focus:border-red-400"
        }`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputText;