import { StationStatus, StationInformation } from 'gbfs-typescript-types/v2.3';

import mockStationStatus from '@/lib/mock_station_status.json';
import mockStationInformation from '@/lib/mock_station_information.json';

const stationStatusData = mockStationStatus as StationStatus;
const stationInformationData = mockStationInformation as StationInformation;



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-2">
            {stationStatusData.data.stations.filter(s => s.is_installed && s.is_renting).map(s => {
              const si = stationInformationData.data.stations.find(si => si.station_id === s.station_id);
              if (si) {
                return (<div key={s.station_id}>{si.name} - {s.num_bikes_available} / {s?.num_docks_available}</div>);
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
