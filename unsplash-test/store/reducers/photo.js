const initialState = {
    photo: {},
    photoLoadingStatus: 'loading'
}

const photo = (state = initialState, action) => {
    switch (action.type) {
        case 'PHOTO_FETCHING':
            return {
                ...state,
                photoLoadingStatus: 'loading'
            }
        case 'PHOTO_FETCHED':
            return {
                ...state,
                photo: action.payload,
                photoLoadingStatus: 'idle'
            }
        case 'PHOTO_FETCHING_ERROR':
            return {
                ...state,
                photoLoadingStatus: 'error'
            }
        default: return state
    }
}

export default photo;