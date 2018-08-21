import EmptyRoute from './empty';
import UsageRoute from './usage';

export default [{
    component: UsageRoute,
    exact: true,
    path: '',
    title: 'Usage',
}, {
    component: EmptyRoute,
    exact: true,
    path: '/empty1',
    title: 'Empty #1',
}, {
    component: EmptyRoute,
    exact: true,
    path: '/empty2',
    title: 'Empty #2',
}, {
    component: EmptyRoute,
    exact: true,
    path: '/empty3',
    title: 'Empty #3',
}, {
    component: EmptyRoute,
    exact: true,
    path: '/empty4',
    title: 'Empty #4 Long Title',
}];
