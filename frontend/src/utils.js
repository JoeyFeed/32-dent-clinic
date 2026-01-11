export const generateTimeSlots = () => {
    // Clinic hours: 10:00 - 18:00
    // Slots: 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00
    const startHour = 10;
    const endHour = 17;
    const slots = [];

    for (let i = startHour; i <= endHour; i++) {
        slots.push(`${i}:00`);
    }
    return slots;
};
