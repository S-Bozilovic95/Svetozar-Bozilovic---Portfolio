import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { jobs } from "../../data/experience";
import JobBlock from "./JobBlock";
import TimelineRail from "./TimelineRail";

const Experience = () => (
  <section id="experience" className="pb-20 pt-[90px] md:pt-[140px]">
    <Container>
      <SectionTitle title="Experience" />

      <div className="mt-9 grid items-start lg:mt-[72px] lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
        <TimelineRail jobs={jobs} endId="experience" />
        <div className="min-w-0">
          {jobs.map((job) => (
            <JobBlock key={job.id} job={job} />
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Experience;
