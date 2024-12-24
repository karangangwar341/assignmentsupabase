export const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options).replace(/ /g, ".");
    const formattedTime = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

    return `${formattedDate} ${formattedTime}`;
};