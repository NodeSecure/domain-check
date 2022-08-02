type Error = string;

export function whois(domain: string): string;
export function resolveMxRecords(domain: string): Array<string> | Error;
