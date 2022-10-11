const initialState = {
    photosList: [],
    photosListLoadingStatus: 'idle'
}

const photosList = (state = initialState, action) => {
    switch (action.type) {
        case 'PHOTOS_LIST_FETCHING':
            return {
                ...state,
                photosListLoadingStatus: 'loading'
            }
        case 'PHOTOS_LIST_FETCHED':
            return {
                ...state,
                photosList: action.payload,
                photosListLoadingStatus: 'idle'
            }
        case 'PHOTOS_LIST_FETCHING_ERROR':
            return {
                ...state,
                photosListLoadingStatus: 'error'
            }
        default: return state
    }
}

export default photosList;