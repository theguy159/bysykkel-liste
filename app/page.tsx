import { StationStatus, StationInformation } from 'gbfs-typescript-types/v2.3';

import { config } from '@/config';
const status_url = config.API_URL_BASE + 'station_status.json';
const info_url = config.API_URL_BASE + 'station_information.json';

const headers = new Headers();
headers.append("Client-Identifier", config.CLIENT_IDENTIFIER);

export default async function Home() {

  const status_data = await fetch(status_url, { headers });
  const stationStatusData: StationStatus = await status_data.json();
  const info_data = await fetch(info_url, { headers });
  const stationInformationData: StationInformation = await info_data.json();


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-2">
            {stationStatusData.data.stations.filter(s => s.is_installed && s.is_renting).map(s => {
              const si = stationInformationData.data.stations.find(si => si.station_id === s.station_id);
              if (si) {
                return (
                  <div key={s.station_id}>
                    {si.name} - ledige låser: {s?.num_docks_available}, kapasitet: {si?.capacity}, sykler: {s.num_bikes_available} {s.last_reported}
                  </div>
                );
              } else {
                return (<div key={s.station_id}>Ukjent stasjon! {s.station_id}</div>);
              }
            })}
          </div>
        </ol>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
