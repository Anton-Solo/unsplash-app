export const fetchPhoto = (request, id) => (dispatch) => {
    dispatch(photoFetching())
    request(`https://api.unsplash.com/photos/${id}?client_id=PPN2Qm0G7KlhVkSk-YikYpAl0rKME44sDt9MBZ8vJrI`)
      .then(data => dispatch(photoFetched(data)))
      .catch(() => dispatch(photoFetchingError()))
}

export const photosListFetching = () => {
    return {
        type: 'PHOTOS_LIST_FETCHING'
    }
}

export const photosListFetched = (photos) => {
    return {
        type: 'PHOTOS_LIST_FETCHED',
        payload: photos
    }
}

export const photosListFetchingError = () => {
    return {
        type: 'PHOTOS_LIST_FETCHING_ERROR'
    }
}

//photo screen

export const photoFetching = () => {
    return {
        type: 'PHOTO_FETCHING'
    }
}

export const photoFetched = (photos) => {
    return {
        type: 'PHOTO_FETCHED',
        payload: photos
    }
}

export const photoFetchingError = () => {
    return {
        type: 'PHOTO_FETCHING_ERROR'
    }
}