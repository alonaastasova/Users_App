const def = [
    {id: 1, name: 'George', image: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg', gender: 'Male'},
    {id: 2, name: 'Natalie', image: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg', gender: 'Female'},
    {id: 3, name: 'John', image: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg', gender: 'Male'},
    {id: 4, name: 'Kathrin', image: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg', gender: 'Female'},
    {id: 5, name: 'Paul', image: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg', gender: 'Male'},
    {id: 6, name: 'Marco', image: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg', gender: 'Male'}
]

export const usersReducer = (state = def, action) => {
    if(action.type === 'USERS_ADD'){
        return [...state, action.payload]
    }else if(action.type === 'USERS_DELETE'){
        return state.filter(({id}) => id !== action.payload)
    }
    return state
}

// if(action.payload.gender === 'Male'){
//     return [...state.male, action.payload]
// }else{
//     state.female = [...state.female, action.payload]
//     return [...state.female, action.payload]
// }