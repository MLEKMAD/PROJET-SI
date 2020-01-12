import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const DashboardGU = React.lazy(() => import('./Demo/DashboardGU/Default'));
const DashboardCIR = React.lazy(() => import('./Demo/DashboardCIR/Default'));


const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));
const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/dashboardCIR/default', exact: true, name: 'CIR', component: DashboardCIR },
    { path: '/dashboardGU/default', exact: true, name: 'GU', component: DashboardGU },
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;