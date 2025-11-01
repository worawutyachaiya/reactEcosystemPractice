import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black/65 w-full h-dvh flex flex-col justify-center items-center text-white gap-2"
      >
        {(errors.Email || errors.Password) && <span className="text-red-500">Input required!</span>}
        <input
          {...register("Email", { required: true ,pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
          placeholder="Email"
          className="w-80 border py-2 px-4 bg-white/20 rounded-xs"
        />
        <input
          {...register("Password",{ required: true , minLength:6})}
          placeholder="Password"
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
          onClick={()=>reset()}
          className="text-center bg-white/55 px-5 py-2 rounded-xs w-80 hover:cursor-pointer"
        />
      </form>
    </div>
  );
};
export default Register;
