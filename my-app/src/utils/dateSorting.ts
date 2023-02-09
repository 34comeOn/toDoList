import { TmockDataList } from "../mock/mockData";

const CALENDAR_ARRAY = [0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_WEEK = 7;
const DAYS_BY_WORDS = 0;

export const collectsDates = (mockData: TmockDataList) => {
    const dateCollection = new Set();

    for (let item of mockData) {
        const taskDate = new Date(item.date);
    
        dateCollection.add(`${taskDate.getDate()}/${taskDate.getMonth() + 1}`);
    }

    return dateCollection;
}

export const sortingTasksByDate = (mockData: TmockDataList) => {
    const tasksMap = new Map();
    const currentCollectedDates = collectsDates(mockData);
    currentCollectedDates.forEach(date => {
        tasksMap.set(date, []);
    })

    for (let task of mockData){
        const taskDate = new Date(task.date);
        const convertedTaskDate = `${taskDate.getDate()}/${taskDate.getMonth() + 1}`;

        if (currentCollectedDates.has(convertedTaskDate)){
            tasksMap.get(convertedTaskDate).push(task);
        }
    }

    return tasksMap;
}

export const getCurrentCalendarWeek = () => {
    // const currentCalendarArray = ['Today', 'Tommorow'];
    const currentCalendarArray = [];
    
    const today = new Date(Date.now());
    const convertedToday = `${today.getDate()}/${today.getMonth() + 1}`;
    const presentDay = Number(convertedToday.split('/')[0]);
    const presentMonth = Number(convertedToday.split('/')[1]);

    for (let i = DAYS_BY_WORDS; i < DAYS_IN_WEEK; i++) {
        if (presentDay + i <= CALENDAR_ARRAY[presentMonth]) {
            currentCalendarArray.push(`${today.getDate() + i}/${today.getMonth() + 1}`)
        }
    }
    return currentCalendarArray;
}
