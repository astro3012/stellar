export const getUserLocalStorage = () => {
    const user = localStorage.getItem('profile')
    return user ? JSON.parse(user) : null
}
