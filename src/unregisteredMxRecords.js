import dns from "dns/promises";

export async function resolveMxRecords(domain) {
  const mxRecords = await dns.resolveMx(domain)
    .catch((err) => new Error(
      err.code === "ENOTFOUND" ? "Domain not found"
        : err.message));

  if (mxRecords instanceof Error) {
    return mxRecords.message;
  }

  return mxRecords.map(({ exchange }) => exchange);
}
