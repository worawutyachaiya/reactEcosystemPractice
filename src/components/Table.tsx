import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Box, Button } from "@mui/material";

// Shape ของข้อมูล course
interface Course {
  courseName: string;
  instructor: string;
  price: number;
}

// mock API
async function fetchCourses(): Promise<Course[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { courseName: "React for Beginners", instructor: "John Doe", price: 1200 },
        { courseName: "Next.js Mastery", instructor: "Sarah Lee", price: 2200 },
        { courseName: "TypeScript Deep Dive", instructor: "Jenny Kim", price: 1800 },
      ]);
    }, 700);
  });
}

export default function CourseTable() {
  // ดึงข้อมูลจาก react-query
  const { data = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  // สร้าง columns
  const columns = useMemo<MRT_ColumnDef<Course>[]>(
    () => [
      {
        accessorKey: "courseName",
        header: "Course Name",
        muiTableHeadCellProps: { style: { fontWeight: "bold", color: "#1976d2" } },
      },
      {
        accessorKey: "instructor",
        header: "Instructor",
      },
      {
        accessorKey: "price",
        header: "Price (THB)",
        Cell: ({ cell }) => `฿${cell.getValue<number>().toLocaleString()}`,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableSorting: true,
    enablePagination: true,
    enableGlobalFilter: true, // 🔍 filter UI
    initialState: { pagination: {
      pageSize: 5,
      pageIndex: 0
    } },

    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20],
    },

    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="outlined"
        onClick={() => table.setGlobalFilter("")}
      >
        Clear Filter
      </Button>
    ),
  });

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  return <MaterialReactTable table={table} />;
}
