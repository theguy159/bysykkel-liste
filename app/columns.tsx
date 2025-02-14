"use client"
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type StationRow = {
  name: string;
  num_docks_available: number;
  num_bikes_available: number;
  capacity: number;
}



export const columns: ColumnDef<StationRow>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stativ
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "num_docks_available",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ledige låser
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "num_bikes_available",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ledige sykler
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "capacity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kapasitet
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  }
]

