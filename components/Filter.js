import React, { useState } from 'react';

function Filter() {
    // State to store the selected filter
    const [filter, setFilter] = useState({
        dataPoints: 100,
        dateRange: 'week',
    });

    return (
        <div>
            <label>Data Points:
                <select value={filter.dataPoints} onChange={e => setFilter({ ...filter, dataPoints: e.target.value })}>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                </select>
            </label>
            <label>Date Range:
                <select value={filter.dateRange} onChange={e => setFilter({ ...filter, dateRange: e.target.value })}>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                </select>
            </label>
        </div>
    );
}

export default Filter;
