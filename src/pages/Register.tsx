import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import InputText from "../components/ui/InputText";
import PasswordInput from "../components/ui/PasswordInput";
import SelectInput from "../components/ui/SelectInput";
import TextareaInput from "../components/ui/TextareaInput";
import Button from "../components/ui/Button";

const schema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  category: z.string().min(1, "Pilih kategori"),
  bio: z.string().min(1, "Bio wajib diisi"),
});

export default function Register() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    console.log(data);

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-center">
        Form Registrasi Event
      </h2>

      <InputText
        placeholder="Nama Lengkap"
        {...register("name")}
        error={errors.name?.message}
      />

      <InputText
        type="email"
        placeholder="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <PasswordInput
        placeholder="Password"
        {...register("password")}
        error={errors.password?.message}
      />

      <SelectInput
        {...register("category")}
        options={[
          { label: "Seminar", value: "seminar" },
          { label: "Workshop", value: "workshop" },
          { label: "Competition", value: "competition" },
        ]}
        error={errors.category?.message}
      />

      <TextareaInput
        placeholder="Bio Singkat"
        {...register("bio")}
        error={errors.bio?.message}
      />

      <Button
        label="Daftar"
        type="submit"
        isLoading={loading}
      />
    </form>
  );
}