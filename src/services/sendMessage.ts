import { site } from "../data/site";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

const openMailClient = ({ name, email, message }: ContactMessage) => {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
};

/**
 * Sends the message to Netlify Forms (the form named "contact" in index.html).
 * Netlify does not run locally, so in development it opens the visitor's email app instead.
 */
export const sendMessage = async (values: ContactMessage) => {
  if (import.meta.env.DEV) {
    openMailClient(values);
    return "mailto" as const;
  }

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": "contact", ...values }).toString(),
  });

  if (!response.ok) throw new Error("The message could not be sent");
  return "sent" as const;
};
