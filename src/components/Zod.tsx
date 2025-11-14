import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const Zod = () => {
    const schema = z.object({
        name: z.string().min(3, "ชื่ออย่างน้อย 3 ตัวอักษร"),
        age: z.coerce.number().min(1, "กรุณาใส่อายุตั้งแต่ 1 ขึ้นไป"),
        email: z.string().email("อีเมลไม่ถูกต้อง"),
        role: z.enum(["student", "teacher"])
    });

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => console.log(data);

    const data =  schema.parse({
        name: "worawut",
        age: 21,
        email: "worawut@gmail.com",
        role: "teacher"
    });

    console.log(data)

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-black/65 w-full h-dvh flex flex-col justify-center items-center text-white gap-2"
            >
                <h1 className="text-4xl">Zod</h1>
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                <input
                    {...register("name")}
                    placeholder="Name"
                    className="w-80 border py-2 px-4 bg-white/20 rounded-xs"
                />
                {errors.age && <span className="text-red-500">{errors.age.message}</span>}
                <input
                    {...register("age")}
                    placeholder="Age"
                    className="w-80 border py-2 px-4 bg-white/20 rounded-xs"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                <input
                    {...register("email")}
                    placeholder="Email"
                    className="w-80 border py-2 px-4 bg-white/20 rounded-xs"
                />
                {errors.role && <span className="text-red-500">{errors.role.message}</span>}
                <input
                    {...register("role")}
                    placeholder="Role"
                    className="w-80 border py-2 px-4 bg-white/20 rounded-xs"
                />
                <input
                    value="Send!"
                    type="submit"
                    className="bg-white/55 px-5 py-2 rounded-xs w-80 hover:cursor-pointer"
                />
                <input
                    value="Reset?"
                    type="button"
                    onClick={() => reset()}
                    className="text-center bg-white/55 px-5 py-2 rounded-xs w-80 hover:cursor-pointer"
                />
            </form>
        </div>
    );
};
export default Zod;
