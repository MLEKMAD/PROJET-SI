export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
       
        {
            id: 'maps',
            title: 'Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'maps',
                    title: 'Map',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

           
                {
                    id: 'docs',
                    title: 'about us',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'sample-page',
                    title: 'Contact us ',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '/auth/signup-1',
                    target: true,
                    breadcrumbs: false,
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}