import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../components/Button";
import { TextAreaField, TextField } from "../../components/Field";
import { sendMessage } from "../../services/sendMessage";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(10, "Please write at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const handleSend = async (values: ContactValues) => {
    setStatus("");

    try {
      const result = await sendMessage(values);
      setStatus(
        result === "sent"
          ? "Thank you, your message was sent."
          : "Opening your email app with the message filled in.",
      );
      reset();
    } catch {
      setStatus("Something went wrong. Please write to me by email instead.");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSend)} noValidate className="grid gap-[22px] text-left">
      <TextField
        label="Name"
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <TextField
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <TextAreaField
        label="Message"
        rows={6}
        error={errors.message?.message}
        {...register("message")}
      />

      <Button
        type="submit"
        variant="solid"
        disabled={isSubmitting || !isValid}
        className="w-full disabled:cursor-not-allowed disabled:opacity-50 md:w-fit"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
      <p role="status" className="min-h-[1.5em] text-[15px] text-primary">
        {status}
      </p>
    </form>
  );
};

export default ContactForm;
