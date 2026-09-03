/**
 * Validates Indian mobile numbers: exactly 10 digits starting with 6–9.
 */
export const PHONE_REGEX = /^[6-9]\d{9}$/

/**
 * Simplified RFC 5322 email pattern: local-part @ domain . tld
 * (no whitespace or @ in any segment)
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Returns true if the value is a valid Indian mobile number.
 * Strips leading/trailing whitespace before testing.
 */
export function validatePhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim())
}

/**
 * Returns true if the value is a valid email address.
 * Strips leading/trailing whitespace before testing.
 */
export function validateEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim())
}
