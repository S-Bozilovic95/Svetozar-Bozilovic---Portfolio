import { site } from "../data/site";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const openMailClient = ({ name, email, message }: ContactMessage) => {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
};

/**
 * Sends the message to a form service (VITE_CONTACT_ENDPOINT, e.g. a Formspree URL).
 * Without an endpoint it falls back to opening the visitor's email app.
 */
export const sendMessage = async (values: ContactMessage) => {
  if (!endpoint) {
    openMailClient(values);
    return "mailto" as const;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) throw new Error("The message could not be sent");
  return "sent" as const;
};
