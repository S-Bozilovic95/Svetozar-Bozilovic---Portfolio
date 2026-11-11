import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ZoomImage from "../../components/ZoomImage";
import { courses, skills } from "../../data/education";
import type { Course, SkillGroup } from "../../types/content";
import { isExternalLink } from "../../utils/isExternalLink";

interface CourseRowProps {
  course: Course;
}

interface SkillRowProps {
  group: SkillGroup;
}

const SkillRow = ({ group }: SkillRowProps) => (
  <div className="grid gap-1 border-b border-border py-6 md:grid-cols-[200px_1fr] md:gap-6">
    <dt className="text-[15px] text-muted-foreground">{group.label}</dt>
    <dd className="text-base leading-[1.7]">{group.items}</dd>
  </div>
);

const CourseRow = ({ course }: CourseRowProps) => {
  const { title, provider, certificateImage, certificateUrl } = course;

  return (
    <li className="grid grid-cols-[84px_minmax(0,1fr)] items-center gap-x-5 gap-y-1.5 border-b border-border py-6 md:grid-cols-[112px_minmax(0,1fr)_auto] md:gap-x-7">
      <span className="relative grid h-[60px] w-[84px] place-items-center overflow-hidden rounded border border-dashed border-border bg-card md:h-[78px] md:w-[112px]">
        <em className="text-xs font-medium not-italic text-muted-foreground">Certificate</em>
        {certificateImage && (
          <ZoomImage
            item={{
              type: "image",
              src: certificateImage,
              alt: `Certificate: ${title}`,
              caption: `${title}, ${provider}`,
            }}
            className="absolute inset-0"
            imgClassName="bg-white object-cover"
          />
        )}
      </span>

      <div className="grid gap-0.5">
        <b className="text-lg font-semibold">{title}</b>
        <span className="text-[15px] text-muted-foreground">{provider}</span>
      </div>

      {certificateUrl && (
        <a
          href={certificateUrl}
          {...(isExternalLink(certificateUrl) && { target: "_blank", rel: "noopener noreferrer" })}
          className="col-start-2 text-[15px] font-medium text-primary hover:underline md:col-start-auto"
        >
          View certificate
        </a>
      )}
    </li>
  );
};

const Education = () => (
  <section id="education" className="border-y border-border bg-surface py-[90px] md:py-[140px]">
    <Container>
      <SectionTitle
        title="Education"
        description="The tools I work with every day, and the courses behind them."
      />

      <div className="mt-[72px] grid gap-[72px] md:gap-[110px]">
        <div>
          <h3 className="mb-[26px] font-display text-[clamp(26px,2.8vw,34px)] font-bold wdth-112">
            Skills
          </h3>
          <dl className="border-t border-border">
            {skills.map((group) => (
              <SkillRow key={group.label} group={group} />
            ))}
          </dl>
        </div>

        <div>
          <h3 className="mb-[26px] font-display text-[clamp(26px,2.8vw,34px)] font-bold wdth-112">
            Learning
          </h3>
          <ul className="border-t border-border">
            {courses.map((course) => (
              <CourseRow key={course.title} course={course} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

export default Education;
