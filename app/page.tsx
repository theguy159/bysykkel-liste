import { StationStatus, StationInformation } from "gbfs-typescript-types/v2.3";

import { StationRow, columns } from "./columns";

import { config } from "@/config";
import { DataTable } from "./data-table";
import { ModeToggle } from "@/components/ModeToggle";
const status_url = config.API_URL_BASE + "station_status.json";
const info_url = config.API_URL_BASE + "station_information.json";

const headers = new Headers();
headers.append("Client-Identifier", config.CLIENT_IDENTIFIER);

async function getData(): Promise<StationRow[]> {
  const status_data = await fetch(status_url, { headers });
  const stationStatusData: StationStatus = await status_data.json();
  const info_data = await fetch(info_url, { headers });
  const stationInformationData: StationInformation = await info_data.json();

  const rows: StationRow[] = stationStatusData.data.stations
    .filter((s) => s.is_installed && s.is_renting)
    .map((s) => {
      const info = stationInformationData.data.stations.find(
        (si) => si.station_id === s.station_id,
      );

      const name = info?.name || "Ukjent stasjon";
      const num_docks_available = s.num_docks_available || 0;
      const num_bikes_available = s.num_bikes_available;
      const capacity = info?.capacity || 0;

      return {
        name,
        num_docks_available,
        num_bikes_available,
        capacity,
      };
    });

  return rows;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Bysykkel liste
        </h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-2">
            <DataTable columns={columns} data={data} />
          </div>
        </ol>
      </main>
    </div>
  );
}
