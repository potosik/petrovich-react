const sidebarConfig = {
    groups: [
        {
            title: 'Логирование',
            elements: [
                {
                    title: 'Логи',
                    path: '/logs',
                    iconClass: 'icon-database-time2',
                    routes: [
                        {
                            title: 'Просмотр логов',
                            path: '/logs',
                            exact: false,
                        },
                    ],
                }
            ],
        },
        {
            title: 'Администрирование',
            elements: [
                {
                    title: 'Пользователи',
                    path: '/admin',
                    iconClass: 'icon-users',
                    routes: [
                        {
                            title: 'Активные пользователи',
                            path: '/admin/activeUsers',
                            exact: true,
                        },
                        {
                            title: 'Удаленные пользователи',
                            path: '/admin/deletedUsers',
                            exact: true,
                        },
                    ],
                }
            ],
        },
        {
            title: 'Склад',
            elements: [
                {
                    title: 'Товар',
                    path: '/storehouse',
                    iconClass: 'icon-office',
                    routes: [
                        {
                            title: 'Перечень товара',
                            path: '/storehouse',
                            exact: true,
                        },
                        {
                            title: 'Добавить товар',
                            path: '/storehouse/new',
                            exact: true,
                        },
                    ],
                }
            ],
        },
        {
            title: 'Менеджер',
            elements: [
                {
                    title: 'Товар',
                    path: '/manager',
                    iconClass: 'icon-home4',
                    routes: [
                        {
                            title: 'Перечень товара',
                            path: '/manager',
                            exact: true,
                        },
                    ],
                }
            ],
        },
    ],
};

const AppSettings = {
    sidebarConfig
};

export default AppSettings;