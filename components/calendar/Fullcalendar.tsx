"use client";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default function FCalendar() {
  const initialEvents = [
    {
      id: "a",
      title: "my event",
      start: "2024-11-15",
    },
    {
      id: "a",
      title: "my event",
      start: "2024-11-15",
    },
    {
      id: "a",
      title: "my event",
      start: "2024-11-15",
    },
    {
      id: "a",
      title: "my event",
      start: "2024-11-15",
    },
    {
      id: "a",
      title: "my event",
      start: "2024-11-15",
    },
    {
      id: "a",
      title: "my event",
      start: "2018-09-01",
    },
  ];
  return (
    <FullCalendar
      firstDay={0}
      eventClassNames={(arg) => {
        if (arg.event.extendedProps.type === "availability") {
          return "availability-event";
        } else if (arg.event.extendedProps.type === "event") {
          // TODO: type fix from event to interview
          return "interview-event";
        } else return "";
      }}
      // ref={(ref) => {
      //   setCalendarRef(ref!);
      // }}
      plugins={[
        //   rrulePlugin,
        dayGridPlugin,
        interactionPlugin,
        timeGridPlugin,
      ]}
      selectMirror={true}
      weekNumberCalculation={"ISO"}
      headerToolbar={{
        left: "title",
        center: "",
        right: "",
      }}
      // eventChange={handleEventChange}
      // TODO: CAN BE USED IN THE FUTURE IF WANTED, CAGRIGIT-HUB WILL CHECK IT.
      // selectOverlap={function (event) {
      //   return !isOwner && event.extendedProps.type === "availability";
      // }}
      // eventOverlap={function (stillEvent, _) {
      //   return !isOwner && stillEvent.extendedProps.type === "availability";
      // }}
      nowIndicator={true}
      editable={true}
      selectable={true}
      // select={handleDateSelect}
      slotDuration={"00:15:00"}
      slotLabelInterval={"01:00"}
      slotEventOverlap={false}
      eventOverlap={true}
      views={{
        week: {
          allDayContent(renderProps, createElement) {
            const timezone = renderProps.view.activeStart.toLocaleTimeString(
              "en-US",
              {
                timeZoneName: "short",
              }
            );
            return (
              <div className="text-xs flex mt-24 text-[#17124A]">
                <div className="items-end justify-end ">
                  {timezone.slice(timezone.length - 5)}
                </div>
              </div>
            );
          },
          dayHeaderContent(renderProps, createElement) {
            // get only day name from renderProps.date
            return (
              <div className="space-y-4 h-20 font-normal mt-4 text-[#17124A]">
                <div className="font-semibold ">
                  {renderProps.date.toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </div>
                <div className="fc-daygrid-day-number">
                  {renderProps.date.toLocaleDateString("en-US", {
                    day: "numeric",
                  })}
                </div>
              </div>
            );
          },
          slotLaneContent(renderProps, createElement) {
            return <div className="bg-green-400"></div>;
          },
          slotLabelContent(renderProps, createElement) {
            const hour = renderProps.date.getHours();
            const ampm = hour >= 12 ? "PM" : "AM";
            const hour12 = hour % 12 || 12;
            // dont render if 12am
            if (hour === 0) {
              return <div></div>;
            }
            return (
              <div className=" text-[#17124A] text-[4px]">
                <div className="text-xs">
                  {hour12} {ampm}
                </div>
              </div>
            );
          },
        },
        day: {
          allDayContent(renderProps, createElement) {
            const timezone = renderProps.view.activeStart.toLocaleTimeString(
              "en-US",
              {
                timeZoneName: "short",
              }
            );
            return (
              <div className="text-xs flex mt-16 text-[#17124A]">
                <div className="items-end justify-end ">
                  {timezone.slice(timezone.length - 5)}
                </div>
              </div>
            );
          },
          slotLaneContent(renderProps, createElement) {
            return <div className="bg-green-400"></div>;
          },
          slotLabelContent(renderProps, createElement) {
            const hour = renderProps.date.getHours();
            const ampm = hour >= 12 ? "PM" : "AM";
            const hour12 = hour % 12 || 12;
            // dont render if 12am
            if (hour === 0) {
              return <div></div>;
            }
            return (
              <div className=" text-[#17124A] text-[4px]">
                <div className="text-xs">
                  {hour12} {ampm}
                </div>
              </div>
            );
          },

          dayHeaderContent(renderProps, createElement) {
            // get only day name from renderProps.date
            return (
              <div className="h-20 font-normal mt-4 text-[#17124A]">
                <div className="font-semibold ">
                  {renderProps.date.toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </div>
                <div className="fc-daygrid-day-number bg-[#E90E8B] text-white rounded-full w-12">
                  {renderProps.date.toLocaleDateString("en-US", {
                    day: "numeric",
                  })}
                </div>
              </div>
            );
          },
        },
        // month: {
        //   dayMaxEventRows: 1,
        // },
      }}
      // eventClick={handleEventClick}
      // eventContent={CalendarEvent}
      unselectCancel=".create-event-modal-inner"
      events={initialEvents}
    />
  );
}
