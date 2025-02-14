export const config = {
  API_URL_BASE:
    process.env.NEXT_PUBLIC_API_URL_BASE ||
    "https://gbfs.urbansharing.com/oslobysykkel.no/",
  CLIENT_IDENTIFIER:
    process.env.NEXT_PUBLIC_CLIENT_IDENTIFIER || "mathias-bysykkel_list",
  REFRESH_TIMEOUT_SECONDS:
    parseInt(process.env.NEXT_PUBLIC_REFRESH_TIMEOUT_SECONDS || "60") || 60,
};
