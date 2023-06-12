import { TimelineCard } from "./TimelineCard";
import { type TimelineItem as TimelineItemType } from "./utils";

export const TimelineList = (props: {
  items: readonly TimelineItemType[];
}): JSX.Element => {
  const { items } = props;

  return (
    <div
      css={(theme) => ({
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      })}
    >
      {items.map((item) => (
        <TimelineCard key={item.id} item={item} />
      ))}
    </div>
  );
};
