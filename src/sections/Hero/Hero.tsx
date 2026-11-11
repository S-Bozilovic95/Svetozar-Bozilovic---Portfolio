import Button from "../../components/Button";
import Container from "../../components/Container";
import { site } from "../../data/site";
import TechOrbit from "./TechOrbit";

const Hero = () => (
  <section className="relative overflow-hidden border-b border-border bg-surface pb-[90px] pt-14 md:pb-[140px] md:pt-[88px]">
    <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0" />

    <Container className="relative">
      <p className="mb-[30px] flex items-center justify-center gap-3 text-[15px] font-medium text-muted-foreground md:justify-start">
        <span className="h-2.5 w-2.5 animate-blink rounded-full bg-primary shadow-glow-lg" />
        {site.availability}
      </p>

      <h1
        aria-label={`${site.firstName} ${site.lastName}`}
        className="text-center font-display text-[clamp(46px,10.6vw,168px)] font-extrabold uppercase leading-[0.88] tracking-[-0.025em] wdth-125 md:text-left"
      >
        <span className="block">{site.firstName}</span>
        <span className="block text-transparent [-webkit-text-stroke:1.5px_rgb(var(--foreground))] md:[-webkit-text-stroke-width:2px]">
          {site.lastName}
        </span>
      </h1>

      <div className="mt-16 grid items-start gap-14 text-center lg:mt-24 lg:grid-cols-[5fr_6fr] lg:gap-[88px] lg:text-left">
        <div>
          <p className="mb-7 font-display text-[clamp(24px,2.5vw,32px)] font-semibold leading-[1.3] wdth-108">
            Frontend developer. <em className="not-italic text-primary">React and TypeScript</em>{" "}
            for interfaces that never stop updating.
          </p>
          <p className="mx-auto max-w-[44ch] text-lg text-muted-foreground lg:mx-0">
            Since 2023 I have worked on the frontend of Aylook at Anteklab: a video surveillance
            platform with a desktop app, a 70-chart diagnostics dashboard and a warehouse tracking
            view.
          </p>
          <p className="mx-auto mt-[18px] max-w-[44ch] text-lg text-muted-foreground lg:mx-0">
            Before that I turned Figma designs into web pages at Zerox. This page goes through all
            of it.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-3.5 lg:justify-start">
            <Button variant="solid" href="#experience">
              See my experience
            </Button>
            <Button href="#contact">Get in touch</Button>
          </div>
        </div>

        <TechOrbit />
      </div>
    </Container>
  </section>
);

export default Hero;
