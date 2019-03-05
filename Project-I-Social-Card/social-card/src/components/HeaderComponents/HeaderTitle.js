import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  //   let month = new Array();
  //   month[0] = "Jan";
  //   month[1] = "Feb";
  //   month[2] = "Mar";
  //   month[3] = "Apr";
  //   month[4] = "May";
  //   month[5] = "Jun";
  //   month[6] = "July";
  //   month[7] = "Aug";
  //   month[8] = "Sept";
  //   month[9] = "Oct";
  //   month[10] = "Nov";
  //   month[11] = "Dec";

  //   let d = new Date();
  //   let n = month[d.getMonth()];
  //   document.getElementById("demo").innerHTML = n;
  return (
    <React.Fragment>
      <h1>Lambda School</h1>
      <span>@LambdaSchool - {moment().format("D MMM")}</span>
      <ul>
        <li>26 Jan</li>
      </ul>
    </React.Fragment>
  );
};
export default HeaderTitle;
