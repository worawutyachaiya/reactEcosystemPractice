# React Ecosystem Practice

โปรเจกต์นี้รวบรวมโจทย์ฝึก React ทั้งหมด 8 หัวข้อ พร้อม Final Challenge เพื่อสร้างแอปจริง โดยใช้ library ยอดนิยม เช่น TanStack Query, React Hook Form, React Select, Zod, AG Grid และอื่น ๆ

---

## 1️ TanStack Query v5 (React Query)

ระบบจัดการ fetch / cache ข้อมูลใน React

### โจทย์ที่ทำแล้ว:
- สร้างหน้า “รายชื่อผู้ใช้”
- ดึงข้อมูลจาก https://jsonplaceholder.typicode.com/users
- แสดงชื่อ + อีเมล
- มีปุ่ม “Refresh” เพื่อ refetch
- แสดง Loading / Error state

### สิ่งที่ได้ฝึก:
- useQuery
- queryKey / queryFn
- refetch / caching
- query states

---

## 2️ React Hook Form

ระบบจัดการฟอร์มเบาและรวดเร็ว

### โจทย์ที่ทำแล้ว:
- หน้า Register / Login
- input: email, password
- validation: required, minLength
- submit → log ข้อมูลลง console
- ปุ่ม reset

### สิ่งที่ได้ฝึก:
- register / handleSubmit
- errors
- reset
- validation

---

## 3️ React Select

Dropdown ที่ customizable มากกว่า select ปกติ

### โจทย์ที่ทำแล้ว:
- ฟอร์มสมัครสมาชิก
- เลือก role: Student, Teacher, Admin
- ใช้ React Select
- แสดง role ที่เลือกด้านล่าง

### สิ่งที่ได้ฝึก:
- options / value / onChange
- ใช้ร่วมกับ react-hook-form ผ่าน Controller

---

## 4️ Lucide Icons

ชุดไอคอนสวย ใช้งานง่าย

### โจทย์ที่ทำแล้ว:
- Navigation Bar พร้อม icons
- เมนู: Home, Profile, Settings
- ใช้ lucide-react
- hover เปลี่ยนสี

### สิ่งที่ได้ฝึก:
- import icons
- ใช้ icons กับ CSS / Tailwind

---

## 5️ AG Grid

Data Grid สำหรับงานข้อมูลจำนวนมาก

### โจทย์ที่ทำแล้ว:
- ตาราง “รายชื่อนักเรียน”
- columns: name, age, grade
- sorting / filtering
- limit 10 rows
- export CSV

### สิ่งที่ได้ฝึก:
- columnDefs / rowData
- sorting / filtering
- export data

---

## 6️ Zod Schema Validation

ระบบตรวจสอบข้อมูลแบบ type-safe

### โจทย์ที่ทำแล้ว:
ตรวจ object:
- name: string (≥ 3)
- age: number (> 0)
- email: email format
- role: student | teacher

ทดสอบ parse() ทั้งข้อมูลผิด/ถูก

### สิ่งที่ได้ฝึก:
- z.object()
- z.string(), z.number()
- safeParse vs parse
- ใช้ร่วมกับ react-hook-form

---

## 7️ PNPM (Package Manager)

ตัวจัดการแพ็กเกจที่เร็วที่สุดในโลก Node.js

### โจทย์ที่ทำแล้ว:
- สร้างโปรเจกต์ React ด้วย pnpm create vite@latest
- ติดตั้ง react-hook-form, react-query
- สำรวจโครงสร้าง node_modules
- รันโปรเจกต์

### สิ่งที่ได้ฝึก:
- pnpm add/remove
- pnpm run dev
- เข้าใจ lockfile และ workspace

---

## 8️ Material React Table (MRT)

ตารางพร้อม UI สวยทันที

### โจทย์ที่ทำแล้ว:
- หน้า “รายการคอร์สเรียน”
- columns: courseName, instructor, price
- pagination + sorting
- ปุ่ม filter
- UI Material UI

### สิ่งที่ได้ฝึก:
- การสร้าง columns
- ใช้ MRT เน้น UI
- Material UI theme
- รวม MRT + React Query โหลดข้อมูลจริง

---

# Final Challenge – Student Dashboard

แอปขนาดเล็กเพื่อรวมทุก library เข้าด้วยกัน

### ฟีเจอร์:
- หน้า Login (React Hook Form + Zod)
- ดึงรายชื่อนักเรียนจาก API (TanStack Query)
- ตารางข้อมูล (Material React Table / AG Grid)
- Dropdown filter ชั้นเรียน (React Select)
- Navigation icon (Lucide)
- ใช้ PNPM จัดการ dependencies

### Bonus:
- Validation ด้วย Zod ก่อนส่งข้อมูล
- ปุ่ม Refresh ข้อมูล
- Responsive design

---

## สรุป

โปรเจกต์นี้ครอบคลุม:
- การจัดการข้อมูล (React Query)
- ฟอร์ม (React Hook Form + Zod)
- UI dropdown (React Select)
- Icon UI (Lucide Icons)
- Data grid (AG Grid / MRT)
- Package manager (PNPM)
- นำทั้งหมดไปใช้ในแอป Student Dashboard
