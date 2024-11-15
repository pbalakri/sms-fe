import { SessionProvider } from 'next-auth/react';

// Create a calendar component that shows the current week's schedule.
//  The component should display the days of the week and the events scheduled for each day. The component should be styled with the Poppins font and have a description of "Generated by create next app". The component should be wrapped in a SessionProvider component and exported as the default export.

export default function WeeklySchedule() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const startTime = 8;
    const endTime = 17;
    const events = [
        { day: 'Mon', time: '10:00', duration: 60, title: 'Meeting with HR' },
        { day: 'Tue', time: '14:15', duration: 60, title: 'Team Standup' },
        { day: 'Wed', time: '9:00', duration: 45, title: 'Interview with Candidate' },
        { day: 'Thu', time: '11:00', duration: 60, title: 'Client Meeting' },
        { day: 'Fri', time: '15:00', duration: 10, title: 'Project Review' },
    ];

    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = startTime; hour <= endTime; hour++) {
            slots.push(`${hour}:00`);
            slots.push(`${hour}:15`);
            slots.push(`${hour}:30`);
            slots.push(`${hour}:45`);
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const getEventForSlot = (day: string, slot: string) => {
        const [hour, minute] = slot.split(':').map(Number);
        const slotTime = new Date();
        slotTime.setHours(hour, minute, 0, 0);
        
        const matchingEvent =  events.find(event => {
            const [eventHour, eventMinute] = event.time.split(':').map(Number);
            const eventTime = new Date();
            eventTime.setHours(eventHour, eventMinute, 0, 0);
            const eventEndTime = new Date(eventTime.getTime() + event.duration * 60000);
            return event.day === day && slotTime >= eventTime && slotTime < eventEndTime;
        });
        let status = 'free';
        if (matchingEvent) {
            console.log(slotTime);
            const [eventHour, eventMinute] = matchingEvent.time.split(':').map(Number);
            const eventTime = new Date();
            eventTime.setHours(eventHour, eventMinute, 0, 0);
            const eventEndTime = new Date(eventTime.getTime() + matchingEvent.duration * 60000);
            console.log(eventTime, slotTime, slotTime.getHours() === eventTime.getHours(), slotTime.getMinutes() === eventTime.getMinutes());
            if (slotTime.getHours() === eventTime.getHours() && slotTime.getMinutes() === eventTime.getMinutes()) {
                status = 'start';
            } else if (slotTime > eventTime && slotTime < eventEndTime) {
                status = 'busy';
            } else if (slotTime === eventEndTime) {
                status = 'end';
            }
            
        }
        return { ...matchingEvent, status };


    };

    return (
        <SessionProvider>
            <div className="p-4 font-poppins">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse table-auto">
                        <thead>
                            <tr>
                                <th className=" p-2 w-32"></th>
                                {days.map((day) => (
                                    <th key={day} className="p-2 w-32">{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots.map((slot) => (
                                <tr className={`${slot.endsWith("00") ? "border-t border-gray-300" : ""}`} key={slot}>
                                    <th className=" p-2 w-32">{slot.endsWith("00") ? slot : ''}</th>
                                    {days.map((day) => (
                                        <td key={day} className={`p-2 text-center w-32 ${
                                            getEventForSlot(day, slot)?.status === 'start' ||
                                            getEventForSlot(day, slot)?.status === 'end' ||
                                            getEventForSlot(day, slot)?.status === 'busy'
                                              ? 'bg-gray-300 text-black'
                                              : ''
                                          }`}>
                                            {getEventForSlot(day, slot)?.status === 'start'  ? getEventForSlot(day, slot)?.title : ''}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </SessionProvider>
    );
}

