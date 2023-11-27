import { z } from "zod";

export const fileSchema = z.object({
  name: z.string(),
  url: z.string(),
  size: z.number(),
});

export type FileSchema = z.infer<typeof fileSchema>;

export const validateEmail = z
  .string()
  .min(1, { message: "Email address is required" })
  .email({ message: "Email address is invalid" });

export const validatePassword = z
  .string()
  .min(1, { message: "Password is required" })
  .min(6, { message: "Password must be at least 6 characters" })
  .regex(new RegExp(".*[A-Z].*"), {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(new RegExp(".*[a-z].*"), {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(new RegExp(".*\\d.*"), {
    message: "Password must contain at least one number",
  });

export const validateNewPassword = z
  .string()
  .min(1, { message: "Password is required" })
  .min(6, { message: "Password must be at least 6 characters" })
  .regex(new RegExp(".*[A-Z].*"), {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(new RegExp(".*[a-z].*"), {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(new RegExp(".*\\d.*"), {
    message: "Password must contain at least one number",
  });

export const validateConfirmPassword = z
  .string()
  .min(1, { message: "Confirm Password is required" })
  .min(6, { message: "Confirm Password must be at least 6 characters" })
  .regex(new RegExp(".*[A-Z].*"), {
    message: "Confirm Password must contain at least one uppercase letter",
  })
  .regex(new RegExp(".*[a-z].*"), {
    message: "Confirm Password must contain at least one lowercase letter",
  })
  .regex(new RegExp(".*\\d.*"), {
    message: "Confirm Password must contain at least one number",
  });
