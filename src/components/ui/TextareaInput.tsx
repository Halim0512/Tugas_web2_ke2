interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <textarea
        {...props}
        className={`border p-2 rounded-md outline-none ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 focus:border-red-400"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextareaInput;