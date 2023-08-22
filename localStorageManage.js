
const getFavorites = (id) => {
    let favoriteAudiosId = [];
    const getFavoriteAudiosId = localStorage.getItem('favorite-audio')
    if (getFavoriteAudiosId) {
        favoriteAudiosId = JSON.parse(getFavoriteAudiosId)
        if (!favoriteAudiosId.includes(id)) {
            favoriteAudiosId.push(id)
        }
    }else{
        favoriteAudiosId.push(id)
    }
    localStorage.setItem('favorite-audio', JSON.stringify(favoriteAudiosId))

    return JSON.parse(localStorage.getItem('favorite-audio'))
};

export default getFavorites;