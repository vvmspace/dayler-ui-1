import { Tabs } from 'dayler-ui';

export default class Tabs extends Component {
    render() {
        return (
            <Tabs routes={[{
                component: ReactComponent,
                exact: true,
                path: '',
                title: 'Tab Title',
            }, {
                component: ReactComponent,
                exact: true,
                path: '/tab_path',
                title: 'Tab Title',
            }]} />
        );
    }
}