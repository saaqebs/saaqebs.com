import React, { Component } from "react";

class Covid19 extends Component {
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