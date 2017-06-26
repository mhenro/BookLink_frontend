export const dateToString = (date) => {
    return addLeadZero(date.getDate()) + ' ' + monthToString(date.getMonth()) + ' ' + date.getFullYear();
};

export const monthToString = (month) => {
    switch (month) {
        case 0: return 'января'; break;
        case 1: return 'февраля'; break;
        case 2: return 'марта'; break;
        case 3: return 'апреля'; break;
        case 4: return 'мая'; break;
        case 5: return 'июня'; break;
        case 6: return 'июля'; break;
        case 7: return 'августа'; break;
        case 8: return 'сентября'; break;
        case 9: return 'октября'; break;
        case 10: return 'ноября'; break;
        case 11: return 'декабря'; break;
    }
};

export const pad = (num, size) => {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
};

export const addLeadZero = (number) => {
    return pad(number, 2);
};