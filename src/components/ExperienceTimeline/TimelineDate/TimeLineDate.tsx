interface Props {
  date: string;
}

const TimelineDate = ({ date }: Props) => {
  return (
    <div className="timeline-left">
      <span className="timeline-date">{date}</span>
    </div>
  );
};

export default TimelineDate;
