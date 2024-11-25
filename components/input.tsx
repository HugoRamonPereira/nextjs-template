import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
import type { ComponentProps } from "react";
import { RxCrossCircled, RxEyeClosed, RxEyeOpen } from "react-icons/rx";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
  inputType?: "password" | "text";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, name, placeholder, error, inputType = "text", className, ...props },
    inputRef
  ) => {
    const inputId = id ?? name;
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <input
          {...props}
          type={
            inputType === "password"
              ? showPassword
                ? "text"
                : "password"
              : "text"
          }
          name={name}
          id={inputId}
          ref={inputRef}
          placeholder=" "
          className={cn(
            "bg-transparent w-full font-light rounded-lg border border-purple-tertiary px-3 h-[52px] mb-1 text-purple-tertiary pt-2 peer placeholder-shown:pt-0 focus:border-purple-tertiary transition-all outline-none",
            className
          )}
        />
        <label
          htmlFor={inputId}
          className="absolute text-[10px] font-light tracking-wide left-[13px] top-2 text-purple-tertiary pointer-events-none peer-placeholder-shown:sm:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:sm:top-3.5 transition-all"
        >
          {placeholder}
        </label>
        {inputType === "password" && (
          <button
            type="button"
            className="absolute top-4 right-4 p-0.5 rounded outline-none focus:outline-purple-tertiary focus:outline-[1.25px]"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <RxEyeOpen className="text-purple-tertiary" />
            ) : (
              <RxEyeClosed className="text-purple-tertiary" />
            )}
          </button>
        )}
        {error ? (
          <div
            className={
              "flex items-center gap-1 h-6 font-light tracking-wide text-red-400"
            }
          >
            <RxCrossCircled />
            <span className="text-red-400 text-xs">{error}</span>
          </div>
        ) : (
          <div className="h-6 invisible"> </div>
        )}
      </div>
    );
  }
);
