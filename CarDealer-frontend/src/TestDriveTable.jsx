import React from "react";

const TestDriveTable = () => {
  return (
    <div className="table-box">
      <h3>Test Drive Requests</h3>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Vehicle</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alex Brown</td>
            <td>Toyota Camry</td>
            <td>March 12</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>Maria Garcia</td>
            <td>Honda Civic</td>
            <td>March 14</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestDriveTable;