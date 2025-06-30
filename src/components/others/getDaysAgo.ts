export const getDaysAgo = (createdAt: string): string => {
    const createdDate = new Date(createdAt);
    const today = new Date();

    // Calculate the difference in milliseconds
    const diffTime = today.getTime() - createdDate.getTime();

    // Convert milliseconds to days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 0 ? "Today" : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
};


export const getMonthsAgo = (createdAt: string): string => {
    const createdDate = new Date(createdAt);
    const today = new Date();

    // Calculate the difference in months
    const diffMonths =
        (today.getFullYear() - createdDate.getFullYear()) * 12 +
        (today.getMonth() - createdDate.getMonth());

    if (diffMonths === 0) return "This month";
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
};
