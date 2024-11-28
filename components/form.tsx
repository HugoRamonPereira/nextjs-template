"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "./input";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import formPadlock from "../public/assets/images/form-padlock.png";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

interface FormProps {
  formType: "sign-in" | "sign-up";
}

export default function Form({ formType }: FormProps) {
  const router = useRouter();

  const formSchema = z
    .object({
      email: z
        .string()
        .min(1, { message: "O email é obrigatório" })
        .email({ message: "O email está inválido" }),
      password: z
        .string()
        .min(1, { message: "A senha é obrigatória" })
        .min(4, { message: "A senha está muito pequena" })
        .max(20, { message: "A senha está muito longa" }),
      confirmPassword: z
        .string()
        .min(1, { message: "A confirmação da senha é obrigatória" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas estão diferentes",
      path: ["confirmPassword"],
    });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    console.log(data);
  });

  return (
    <form
      className="mt-5 lg:mt-3 flex flex-col gap-2 w-full  font-charlevoix-medium"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto mb-5">
        <Image src={formPadlock} alt="Padlock" width={50} height={50} />
      </div>
      <Input
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        inputType="password"
        placeholder="Senha"
        error={errors.password?.message}
        {...register("password")}
      />
      {formType === "sign-up" && (
        <Input
          type="password"
          inputType="password"
          placeholder="Confirmar Senha"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
      )}
      {formType === "sign-in" ? (
        <div className="flex items-center justify-center gap-2 mb-4 text-center text-purple-tertiary">
          <p>Ainda não tem uma conta?</p>
          <Link
            href="/sign-up"
            className="underline underline-purple-tertiary underline-offset-4 hover:text-purple-quinary transition-colors duration-200 rounded outline-none focus:outline-purple-tertiary focus:outline-2"
          >
            Criar Conta
          </Link>
        </div>
      ) : (
        <div className="flex flex-col text-center text-purple-tertiary">
          <div className="flex items-center justify-center gap-2 mb-3">
            <p>Já possui uma conta?</p>
            <Link
              href="/sign-in"
              className="underline underline-purple-tertiary underline-offset-4 hover:text-purple-quinary transition-colors duration-200 rounded outline-none focus:outline-purple-tertiary focus:outline-2"
            >
              Fazer Login
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Checkbox />
            <p>Eu li e aceito os</p>
            <Link
              href="/terms"
              className="underline underline-purple-tertiary underline-offset-4 hover:text-purple-quinary transition-colors duration-200 rounded outline-none focus:outline-purple-tertiary focus:outline-2"
            >
              Termos e Condições
            </Link>
          </div>
        </div>
      )}
      <Button
        type="submit"
        className="bg-purple-primary hover:bg-purple-secondary transition-colors duration-300 text-base py-6 tracking-wide rounded outline-none focus:outline-2 focus:outline-purple-tertiary"
      >
        {formType === "sign-in" ? "Entrar" : "Criar Conta"}
      </Button>
    </form>
  );
}
