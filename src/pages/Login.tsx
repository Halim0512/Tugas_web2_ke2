import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Forminput from "../components/Forminput";
import Button from "../components/ui/Button";

const schema = z.object({
  email: z.string().min(1, "email harus di isi"),
  password: z.string().min(6, "Password harus minimal 6 karakter"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Forminput
          text="email"
          type="text"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <Forminput
          text="password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <Button label="Login" variant="primary" />
      </form>
    </div>
  );
}