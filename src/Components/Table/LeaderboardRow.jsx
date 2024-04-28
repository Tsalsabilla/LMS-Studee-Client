import React from "react";

const LeaderboardRow = ({ data }) => {

  return (
    <tr className="tableRow">
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.class}</td>
      {/* <td>{data.totalScratch}</td> */}
      <td>{data.totalScore}</td>
    </tr>
  );
};
export default LeaderboardRow;
