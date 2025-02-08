import { z } from "zod";

// Helper function to create a regex pattern for the password
const createPasswordRegex = () => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?]).*$/;
};

// Helper function to validate date of birth
const isValidDateOfBirth = (value: string) => {
    const date = new Date(value);
    const now = new Date();
    const minAge = 12;
    const maxAge = 100;

    if (isNaN(date.getTime())) {
        return false; // Invalid date format
    }

    let age = now.getFullYear() - date.getFullYear();
    const monthDiff = now.getMonth() - date.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) {
        age--;
    }

    return age >= minAge && age <= maxAge;
};

// Login input schema
export const loginInputSchema = z.object({
    email: z.string().email("Địa chỉ email không hợp lệ"),
    password: z
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(20, "Mật khẩu không được vượt quá 20 ký tự")
        .regex(
            createPasswordRegex(),
            "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
        ),
    device_id: z.string().min(1, "ID thiết bị là bắt buộc"),
});

// Register input schema
export const registerInputSchema = z.object({
    email: z.string().email("Địa chỉ email không hợp lệ"),
    password: z
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(20, "Mật khẩu không được vượt quá 20 ký tự")
        .regex(
            createPasswordRegex(),
            "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
        ),
    first_name: z.string().min(1, "Tên là bắt buộc"),
    last_name: z.string().min(1, "Họ là bắt buộc"),
    username: z.string().min(1, "Tên người dùng là bắt buộc"),
    date_of_birth: z.string().refine(isValidDateOfBirth, {
        message: "Ngày sinh không hợp lệ. Người dùng phải từ 12 đến 100 tuổi.",
    }),
    device_id: z.string().min(1, "ID thiết bị là bắt buộc"),
});

export const loginSchema = z.object({
    email: z.string().email("Địa chỉ email không hợp lệ"),
    password: z
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(20, "Mật khẩu không được vượt quá 20 ký tự")
        .regex(
            createPasswordRegex(),
            "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
        ),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
export type RegisterInput = z.infer<typeof registerInputSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
