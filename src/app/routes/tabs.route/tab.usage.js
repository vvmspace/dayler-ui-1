import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';

export default class Tab2 extends Component {
    render() {
        return (
            <div>
                <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                    {`import { TabsRouter } from 'dayler-ui';\n\nexport default class Tabs extends Component {\n    routes = [{\n        component: TabInitial,\n        exact: true,\n        path: '',\n        title: 'Initial Tab',\n    }, {\n        component: TabUsage,\n        exact: true,\n        path: '/usage',\n        title: 'Usage',\n    }];\n\n    render() {\n        // You MUST provide router props as {...this.props}\n        return (\n            <TabsRouter routes={this.routes} {...this.props} />\n        );\n    }\n}`}
                </SyntaxHighlighter>
            </div>
        );
    }
}
