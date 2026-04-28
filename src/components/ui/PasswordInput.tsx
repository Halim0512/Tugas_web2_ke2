import { useState } from "react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  error,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col">
      <div className={`flex border rounded-md ${error ? "border-red-500 bg-red-50" : "border-gray-300"}`}>
        <input
          type={show ? "text" : "password"}
          {...props}
          className="p-2 w-full outline-none"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="px-3 text-sm text-gray-500"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PasswordInput;