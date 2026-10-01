/** Central place for the contact details and embeds used across the site. */
export const WHATSAPP_NUMBER = "919511202129";
export const CONTACT_EMAIL = "contact@wellhandled.in";
export const CALENDAR_LINK = "https://calendar.app.google/YGvR4W2VDJmZPqFJ9";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Opens Gmail's compose screen addressed to the site owner. */
export function gmailLink(subject?: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
  });
  if (subject) params.set("su", subject);
  return `https://mail.google.com/mail/?${params.toString()}`;
}
