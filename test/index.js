// Import Third-party Dependencies
import test from "tape";

// Import Internal Dependencies
import { whois, resolveMxRecords } from "../src/index.js";

// MX OK
test("Given a valid domain, this test should pass", async(t) => {
  // Given
  const domain = "google.com";

  // When
  const mxRecords = await resolveMxRecords(domain);

  // Then
  t.equal(mxRecords[0], "smtp.google.com");
  t.end();
});

// MX KO
test("Given an invalid domain, this test should not pass", async(t) => {
  // Given
  const domain = "aaa";

  // When
  const mxRecords = await resolveMxRecords(domain);

  // Then
  t.equal(mxRecords.error, `queryMx ENODATA ${domain}`);
  t.end();
});

// Socket
test("Given a valid domain, this test should pass", async(t) => {
  // Given
  const domain = "google.com";

  // When
  const domainExpirationDate = await whois(domain);

  // Then
  t.isNot(domainExpirationDate, "");
  t.end();
});
