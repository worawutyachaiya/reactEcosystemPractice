<!--TODO: 1️⃣ TanStack Query v5 (React Query) -->

📘 หัวใจของการ fetch / cache ข้อมูลใน React

โจทย์ฝึก:
สร้างหน้า “รายชื่อผู้ใช้” ❌ทำแล้ว

ดึงข้อมูลจาก https://jsonplaceholder.typicode.com/users ❌ทำแล้ว

แสดงชื่อ + อีเมล ❌ทำแล้ว

ใส่ปุ่ม “Refresh” เพื่อ refetch ข้อมูลใหม่ ❌ทำแล้ว

แสดงสถานะ Loading และ Error ด้วย ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ useQuery
✅ queryKey / queryFn
✅ refetch / caching
✅ query states

<!--TODO: 2️⃣ React Hook Form -->

📘 ระบบจัดการฟอร์มแบบเบาและเร็ว

โจทย์ฝึก:
สร้างหน้า “Register / Login Form” ❌ทำแล้ว

ฟอร์มมี input: email, password ❌ทำแล้ว

ทำ validation เช่น: ต้องกรอก, ความยาวขั้นต่ำ ❌ทำแล้ว

เมื่อกด submit ให้แสดงข้อมูลใน console ❌ทำแล้ว

เพิ่มปุ่ม reset ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ register / handleSubmit
✅ errors
✅ reset
✅ validation
w
<!--TODO: 3️⃣ React Select -->

📘 Dropdown ที่ customizable มากกว่า <select> ปกติ

โจทย์ฝึก:
สร้างฟอร์ม “สมัครสมาชิก” ที่มีช่อง ❌ทำแล้ว

เลือก role: Student, Teacher, Admin ❌ทำแล้ว

ใช้ React Select ❌ทำแล้ว

เมื่อเลือกแล้วให้แสดง role ที่เลือกด้านล่าง ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ options / value / onChange
✅ การใช้ร่วมกับ react-hook-form ผ่าน Controller

<!--TODO: 4️⃣ Lucide Icons -->

📘 ชุดไอคอนสวยและใช้งานง่าย

โจทย์ฝึก:
สร้าง “Navigation Bar” ที่มี icon แต่ละเมนู ❌ทำแล้ว

Home, Profile, Settings ❌ทำแล้ว

ใช้ไอคอนจาก lucide-react ❌ทำแล้ว

hover แล้วเปลี่ยนสี ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ import icons
✅ ใช้ icons กับ CSS / Tailwind

<!--TODO: 5️⃣ AG Grid -->

📘 Data Grid สำหรับข้อมูลเยอะ ๆ

โจทย์ฝึก:
สร้างตาราง “รายชื่อนักเรียน” ❌ทำแล้ว

Columns: name, age, grade ❌ทำแล้ว

เพิ่มฟีเจอร์ filter, sort ❌ทำแล้ว

แสดง 10 แถว ❌ทำแล้ว

ใส่ปุ่ม export CSV ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ columnDefs / rowData
✅ sorting / filtering
✅ export data

<!--TODO: 6️⃣ Zod Schema Validation -->

📘 ระบบตรวจสอบข้อมูลแบบ type-safe

โจทย์ฝึก:
เขียน schema ตรวจสอบ object ดังนี้: ❌ทำแล้ว

{ ❌ทำแล้ว
  name: string (ต้องยาว ≥ 3),
  age: number (ต้องมากกว่า 0),
  email: email format,
  role: "student" | "teacher"
} ❌ทำแล้ว


และลองทดสอบ .parse() กับข้อมูลผิด/ถูก ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ z.object()
✅ z.string(), z.number()
✅ safeParse vs parse
✅ integration กับ react-hook-form

<!--TODO: 7️⃣ PNPM (Package Manager) -->

📘 ระบบติดตั้งแพ็กเกจที่เร็วที่สุดในโลก Node.js

โจทย์ฝึก:

ติดตั้งโปรเจกต์ React ใหม่ด้วย pnpm create vite@latest my-app ❌ทำแล้ว

ติดตั้ง dependencies: react-hook-form, react-query ❌ทำแล้ว

ดูโครงสร้าง node_modules ว่าทำไมมันประหยัดกว่า npm ❌ทำแล้ว

รันโปรเจกต์ ❌ทำแล้ว

สิ่งที่จะได้ฝึก:
✅ pnpm add/remove
✅ pnpm run dev
✅ เข้าใจ lockfile และ workspace

<!--TODO: 8️⃣ Material React Table (MRT) -->

📘 ตารางข้อมูลพร้อม UI สวยทันที

โจทย์ฝึก:
สร้างหน้า “รายการคอร์สเรียน”

columns: courseName, instructor, price

มี pagination และ sorting

เพิ่มปุ่ม filter

ทำให้สวยด้วย Material UI

สิ่งที่จะได้ฝึก:
✅ การสร้าง columns
✅ data table UI
✅ Material UI theme
✅ การรวมกับ react-query เพื่อโหลดข้อมูลจริง

🧠 เพิ่มเลเวล: โปรเจกต์รวม (Final Challenge)

โจทย์:
สร้าง mini app ชื่อ "Student Dashboard" รวมทุก library เข้าด้วยกัน

Feature ที่ต้องมี:

✅ หน้า Login (React Hook Form + Zod)

✅ ดึงรายชื่อนักเรียนจาก API (TanStack Query)

✅ ตารางข้อมูล (Material React Table / AG Grid)

✅ Dropdown filter ชั้นเรียน (React Select)

✅ Icon Navigation (Lucide)

✅ ใช้ PNPM จัดการ dependency

Bonus:

ใช้ Zod ตรวจ validation ก่อนส่งข้อมูล

มีระบบ Refresh ข้อมูลในตาราง

Responsive design