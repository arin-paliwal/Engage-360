import { create_access_token } from "../utility/access-token";

describe("create_access_token", () => {
  it("should generate a token with role 1", () => {
    const token = create_access_token(1);
    expect(token.startsWith("1-")).toBe(true);
    expect(token.length).toBeGreaterThan(2);
  });

  it("should generate a token with role 2", () => {
    const token = create_access_token(2);
    expect(token.startsWith("2-")).toBe(true);
    expect(token.length).toBeGreaterThan(2);
  });

  it("should generate different tokens on each call", () => {
    const token1 = create_access_token(1);
    const token2 = create_access_token(1);
    expect(token1).not.toBe(token2);
  });

  it("should not include invalid characters in the token", () => {
    const token = create_access_token(1);
    expect(/^[a-z0-9-]+$/.test(token)).toBe(true);
  });
});
