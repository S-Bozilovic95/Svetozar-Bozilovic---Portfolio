import Button from "../../components/Button";
import Container from "../../components/Container";
import { site } from "../../data/site";
import ContactForm from "./ContactForm";
import CopyEmailButton from "./CopyEmailButton";

const profileLinks = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Download CV", href: site.links.cv },
].filter((link) => link.href);

const Contact = () => (
  <section id="contact" className="bg-deep pb-24 pt-[90px] md:pb-14 md:pt-[140px]">
    <Container>
      <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="max-w-[18ch] font-display text-[clamp(28px,3.4vw,48px)] font-bold leading-[1.15] wdth-115">
            Looking for a frontend role on a complex, real-time product.
          </h2>
          <p className="mt-[22px] max-w-[36ch] text-muted-foreground">
            Write to me here or by email. I usually answer within a day.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-[34px] inline-block max-w-full border-b-[3px] border-primary pb-1.5 font-display text-[clamp(20px,2.4vw,30px)] font-bold leading-[1.2] tracking-[-0.01em] transition-colors wdth-112 [overflow-wrap:anywhere] hover:text-primary"
          >
            {site.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-3">
            <CopyEmailButton email={site.email} />
            {profileLinks.map(({ label, href }) => (
              <Button key={label} href={href}>
                {label}
              </Button>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>

      <footer className="mt-[70px] flex flex-col items-start justify-between gap-2 border-t border-border pt-[26px] text-sm text-muted-foreground md:mt-[110px] md:flex-row md:gap-5">
        <span>
          {site.firstName} {site.lastName} · Serbia · remote · B2B
        </span>
        <span>Client details are blurred or removed where needed.</span>
      </footer>
    </Container>
  </section>
);

export default Contact;
