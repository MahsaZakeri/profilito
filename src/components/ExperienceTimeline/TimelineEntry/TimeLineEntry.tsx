import TimelineDot from "../TimelineDot/TimelineDot";
import TimelineContent from "../TimelineContent/TimelineContent";
import type { Experience } from "../../../models/Experience";
import TimelineDate from "../TimelineDate/TimeLineDate";

interface Props {
  experience: Experience;
}

const TimelineEntry = ({ experience }: Props) => {
  return (
    <div className="timeline-entry">
      <TimelineDate date={experience.date} />
      <TimelineDot />
      <TimelineContent experience={experience} />
    </div>
  );
};

export default TimelineEntry;
