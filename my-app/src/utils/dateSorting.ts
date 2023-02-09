import { TmockDataList } from "../mock/mockData"

const calendarArray = [0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const collectsDates = (mockData: TmockDataList) => {
    const dateCollection = new Set();

    for (let item of mockData) {
        const taskDate = new Date(item.date);
    
        dateCollection.add(`${taskDate.getDate()}/${taskDate.getMonth() + 1}`);
    }

    return dateCollection;
}

export const tasksSortingByDate = (mockData: TmockDataList) => {

}

export const getCurrentCalendarWeek = () => {
    const currentCalendarArray = ['Today', 'Tommorow'];
    
    const today = new Date(Date.now());
    const convertedToday = `${today.getDate()}/${today.getMonth() + 1}`;
    const presentDay = Number(convertedToday.split('/')[0]);
    const presentMonth = Number(convertedToday.split('/')[1]);

    for (let i = 2; i < 7; i++) {
        if (presentDay + i <= calendarArray[presentMonth]) {
            currentCalendarArray.push(`${today.getDate() + i}/${today.getMonth() + 1}`)
        }
    }
    return currentCalendarArray;
}
