const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);
    const day = dateFormatted.getDate();
    const month = dateFormatted.getMonth() + 1;
    const year = dateFormatted.getFullYear();

    const dayFormatted = day < 10 ? `0${day}` : day
    const monthFormatted = month < 10 ? `0${month}` : month

    return `${dayFormatted}/${monthFormatted}/${year}`
}

export default formatDate;