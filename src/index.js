import { whois } from "./domainExpirationDate.js";
import { resolveMxRecords } from "./unregisteredMxRecords.js";

export async function main(domain) {
  if (!domain) {
    throw new Error("Domain is required");
  }

  const domainExpirationDate = await whois(domain);
  const mxRecordsUnregistered = await resolveMxRecords(domain);

  return {
    domainExpirationDate,
    mxRecordsUnregistered
  };
}

main().catch((err) => console.error(err));
