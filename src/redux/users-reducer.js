// Экшены
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';


// Экшен-криейторы
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsers = (count) => ({type: SET_TOTAL_USERS, count});


// Начальное значение
let initialState = {
    users: [],
    pageSize: 5, // размер страницы ( количество выводимых элементов )
    totalUsers: 0, // общее количество пользователей
    currentPage: 1 // текущая страница
    // Разделив общее количество пользователей на размер страницы, мы узнаем сколько всего страниц
};


// Главная функция
const usersReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    // debugger;

    switch (action.type) {

        default:
            return state; // ничего не происходит, возвращает то что пришло

        case FOLLOW: {
            //  debugger;
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, totalUsers: action.count}
        }
    }
    return state;
};


export default usersReducer;