import React  from 'react';
import Moment from 'react-moment';

export default class MyComponent extends React.Component {
    render() {
        return (
            <Moment fromNow>1976-04-19T12:59-0500</Moment>
        );
    }
}