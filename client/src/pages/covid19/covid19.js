import React, { Component } from 'react';


class Covid19 extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { value: '' };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    render() {
        return (
            <form name="search" action="/graph.py" method="get">
                Search: <input type="text" name="municipal" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Covid19;