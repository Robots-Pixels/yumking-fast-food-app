export const validBookingDate = (day, time) => {
    const currentDate = new Date();
    
    console.log("Actuel: ", currentDate);

    const [startTimeStr, _] = time.split("-").map(str => str.trim());
    const startTime = new Date(`${day} ${startTimeStr}`);

    return (currentDate.getTime() <= startTime.getTime());
}
