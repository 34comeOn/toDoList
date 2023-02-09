export type TmockDataItem = {
    id: string,
    title: string,
    task: string,
    date: number,
    hasDone: boolean,
    color?: string,
};

export type TmockDataList = TmockDataItem[]

export const mockData:TmockDataList = [
    {
        id: '001',
        title: 'Visit David',
        task: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.`,
        date: 1675903153000,
        hasDone: false,
        color: 'red',
    },
    {
        id: '002',
        title: 'Groceries For Dinner',
        task: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.`,
        date: 1675903154000,
        hasDone: false,
        color: 'blue',
    },
    {
        id: '003',
        title: `Fix Dad's iPad`,
        task: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.`,
        date: 1675903155356,
        hasDone: false,
        color: 'blue',
    },
];
// 1675816755356