import React from "react";

const InquiriesTable = () => {
  return (
    <div className="table-box">
      <h3>Recent Inquiries</h3>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Vehicle</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Smith</td>
            <td>Toyota Camry</td>
            <td>Is it available?</td>
          </tr>

          <tr>
            <td>Sara Lee</td>
            <td>Toyota Corolla</td>
            <td>Interested in financing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InquiriesTable;