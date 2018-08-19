import React, { Component } from 'react';
import { CheckedBadge } from 'dayler-ui';

export default class ExampleComponent extends Component {
    checkedBadges = [{
        id: 0,
        title: 'Dark',
        type: 'dark',
    }, {
        id: 1,
        title: 'Red',
        type: 'red',
    }, {
        id: 2,
        title: 'Green',
        type: 'green',
    }, {
        id: 3,
        title: 'Yellow',
        type: 'yellow',
    }];

    state = {
        checkedBadge: 0,
    };

    handleBadgeClick = badge => () => {
        this.setState({
            checkedBadge: badge.id,
        });
    }

    render() {
        const { checkedBadge } = this.state;

        return <div>
            {this.checkedBadges.map(badge => (
                <CheckedBadge key={badge.id}
                    checked={checkedBadge === badge.id}
                    onClick={this.handleBadgeClick(badge)}
                    title={badge.title}
                    type={badge.type}
                />
            ))}
        </div>;
    }
}
