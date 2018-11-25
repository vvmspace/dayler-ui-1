import BadgesRoute from './Badges/route';
import ButtonsRoute from './Buttons/route';
import FeatherIconsRoute from './FeatherIcons/route';
import FormsRoute from './Forms/route';
import ImageCropRoute from './ImageCrop/route';
import OverviewRoute from './Overview/route';
import PanelsRoute from './Panels/route';
import SetupRoute from './Setup/route';
import SnakbarRoute from './Snakbar/route';
import SwitchesRoute from './Switches/route';
import TabsRoute from './Tabs/route';

export default [{
    component: SetupRoute,
    exact: true,
    icon: 'box',
    href: '/',
    title: 'Setup',
}, {
    component: OverviewRoute,
    exact: false,
    icon: 'book',
    href: '/overview',
    title: 'Overview',
}, {
    component: BadgesRoute,
    exact: false,
    icon: 'server',
    href: '/badges',
    title: 'Badges',
}, {
    component: PanelsRoute,
    exact: false,
    icon: 'layers',
    href: '/panels',
    title: 'Panels',
}, {
    component: FeatherIconsRoute,
    exact: false,
    icon: 'feather',
    href: '/icons',
    title: 'Feather Icons',
}, {
    component: ButtonsRoute,
    exact: false,
    icon: 'grid',
    href: '/buttons',
    title: 'Buttons',
}, {
    component: ImageCropRoute,
    exact: false,
    icon: 'crop',
    href: '/crop',
    title: 'Crop',
}, {
    component: FormsRoute,
    exact: false,
    icon: 'terminal',
    href: '/forms',
    title: 'Forms',
}, {
    component: SnakbarRoute,
    exact: false,
    icon: 'message-circle',
    href: '/snack',
    title: 'Snakbar',
}, {
    component: SwitchesRoute,
    exact: false,
    icon: 'toggle-left',
    href: '/switches',
    title: 'Switches',
}, {
    component: TabsRoute,
    exact: false,
    icon: 'folder',
    href: '/tabs',
    title: 'Tabs',
}];
