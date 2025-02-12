import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    CLIENT_IDENTIFIER: 'Mathias-bysykkel_list',
    API_URL: 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json',
    REFRESH_FREQUENCY_SECONDS: '10'
  },
};

export default nextConfig;
