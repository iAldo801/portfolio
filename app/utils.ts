export function truncateText(text: any, maxLength: any) {
    if (text && text.length > maxLength) {
        return text.substring(0, maxLength - 3) + "...";
    }
    return text;
}

export function formattedDate() {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    const hours = date.getHours();
    const formattedHours = hours.toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');


    return `${month}/${day}/${year} at ${formattedHours}:${minutes}`
}

export function dateEdited() {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    const hours = date.getHours();
    const formattedHours = hours.toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${month}/${day}/${year} at ${formattedHours}:${minutes}`
}