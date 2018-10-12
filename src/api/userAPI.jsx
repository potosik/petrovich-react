const defaultDalay = 555;
const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

const fetchCurrentUserInfo = () => {
    return delay(defaultDalay).then(() => (
        {
            firstName: "Eugenia",
            lastName: "Williamson",
            fullName: "Eugenia Williamson",
            contacts: {
                mobile: "+375-29-000-00-00",
                email: "administrator@petrovich.by"
            },
            position: "Администратор"
        })
    );
};

const defaultUser = {
    "firstName": "Error",
    "lastName": "",
    "fullName": "Error occured",
    "contacts": {
        "mobile": "---",
        "email": "---"
    },
    "position": "---",
};

const userAPI = {
    fetchCurrentUserInfo,
    defaultUser
};

export default userAPI;