export const ValidEmpty = (title, description) =>{
    if(title === undefined && description === ''){
        return false;
    }else{
        return true;
    }
}

export const CheckDates= (dateStart, dateEnd) =>{
    const start = new Date(dateStart);
    const end = new Date(dateEnd);
    const now = new Date()

    const validDate = start <= end && start >= now && end >= now;

    return validDate;
}