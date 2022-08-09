type IError = {
  error: string,
  context: Error,
};

export function whois(domain: string): string;
export function resolveMxRecords(domain: string): Array<string> | IError;
