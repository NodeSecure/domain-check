import dns from "node:dns/promises";

export async function resolveMxRecords(domain) {
  const mxRecords = await dns.resolveMx(domain)
    .catch((err) => new Error(
      err.code === "ENOTFOUND" ? "Domain not found"
        : err.message));

  if (mxRecords instanceof Error) {
    return {
      error: mxRecords.message,
      context: mxRecords
    };
  }

  return mxRecords.map(({ exchange }) => exchange);
}
