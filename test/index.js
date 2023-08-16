// Import Node.js Dependencies
import test from "node:test";
import assert from "node:assert";

// Import Internal Dependencies
import { whois, resolveMxRecords } from "../src/index.js";

// MX OK
test("Given a valid domain, this test should pass", async() => {
  // Given
  const domain = "google.com";

  // When
  const mxRecords = await resolveMxRecords(domain);

  // Then
  assert.equal(mxRecords[0], "smtp.google.com");
});

// MX KO
test("Given an invalid domain, this test should not pass", async() => {
  // Given
  const domain = "aaa";

  // When
  const mxRecords = await resolveMxRecords(domain);

  // Then
  assert.equal(mxRecords.error, `queryMx ENODATA ${domain}`);
});

// Socket
test("Given a valid domain, this test should pass", async() => {
  // Given
  const domain = "google.com";

  // When
  const domainExpirationDate = await whois(domain);

  // Then
  assert.notEqual(domainExpirationDate, "");
});
