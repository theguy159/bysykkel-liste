"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Grid2x2, Bike, MapPin, LockOpen } from "lucide-react";

export type StationRow = {
  name: string;
  num_docks_available: number;
  num_bikes_available: number;
  capacity: number;
};

export const columns: ColumnDef<StationRow>[] = [
  {
    accessorKey: "name",
    size: 286,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Sykkelstativ navn"
        >
          <MapPin className=" h-4 w-4" />
          Sykkelstativ
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "num_docks_available",
    size: 200,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Antall tilgjengelige låser"
        >
          <LockOpen className=" h-4 w-4" />
          Ledige låser
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "num_bikes_available",
    size: 200,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Antall ledige sykler"
        >
          <Bike className=" h-4 w-4" />
          Ledige sykler
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "capacity",
    size: 200,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Total antall låser"
        >
          <Grid2x2 className=" h-4 w-4" />
          Kapasitet
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
