import { Info } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineComponent = () => {
  const appointments = [
    {
      date: "12 Oct 2023",
      procedure: "Prosthetic Tooth Fabrication",
      doctor: "Drg. Wade Warren",
    },
    {
      date: "12 Sep 2023",
      procedure: "Post-Surgical Care",
      doctor: "Drg. Marvin McKinney",
    },
    {
      date: "12 Aug 2023",
      procedure: "Implant Placement",
      doctor: "Drg. Floyd Miles",
    },
  ];

  return (
    <div className="bg-white dark:bg-darkMode-background rounded-xl p-6 border-2 border-borders-primary dark:border-borders-secondary">
      <h2 className="text-2xl font-semibold mb-7 text-lightMode-primaryText dark:text-darkMode-primaryText">
        Your Timeline
      </h2>
      <VerticalTimeline>
        {appointments.map((appointment, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "var(--color-bg-light)",
              color: "var(--color-text-primary)",
            }}
            contentArrowStyle={{
              borderRight: "1px solid  var(--color-bg-light)",
            }}
            date={appointment.date}
            iconStyle={{
              background: "var(--color-accent-blue)",
              color: "#000",
            }}
            icon={<Info size={20} />}
          >
            <h3 className="text-lg font-medium">{appointment.procedure}</h3>
            <p className="text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText">
              {appointment.doctor}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineComponent;
