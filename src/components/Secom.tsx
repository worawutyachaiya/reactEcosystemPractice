import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

type RoleOption = {
  value: string;
  label: string;
};

interface FormValues {
  role: RoleOption | null;
}

const roleOptions: RoleOption[] = [
  { value: "student", label: "Student" },
  { value: "teacher", label: "Teacher" },
  { value: "admin", label: "Admin" },
];

const Secom: React.FC = () => {
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      role: null,
    },
  });

  const selectedRole = watch("role");

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
      }}
    >
      <h2>📋 สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>เลือก Role</label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={roleOptions}
              placeholder="เลือกบทบาทของคุณ..."
              onChange={(val) => field.onChange(val)}
              value={field.value}
            />
          )}
        />

        <button
          type="submit"
          style={{
            marginTop: 20,
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          สมัคร
        </button>
      </form>

      {selectedRole && (
        <div style={{ marginTop: 20 }}>
          <strong>Role ที่เลือก:</strong> {selectedRole.label}
        </div>
      )}
    </div>
  );
};

export default Secom;
