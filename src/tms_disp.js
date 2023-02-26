import React, { Component } from 'react';
import trailerData from './tms_data';

class TrailerInventory extends component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>Trailer Inventory</h1>
                <table>
                    <thead>
                        <tr>
                          <th>ID</th>
                          <th>Type</th>
                          <th>Status</th>
                          <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trailers.map(trailer => (
                          <tr key={trailer.id}>
                            <td>{trailer.id}</td>
                            <td>{trailer.type}</td>
                            <td>{trailer.status}</td>
                            <td>{trailer.location}</td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TrailerInventory;