import React, { useState } from "react";
import "./regdesign.css";
const RegDesign = () => {
  return (
    <div className="row" id="detailsDiv">
      <div className="column">
        <fieldset>
          <h3>ADVISORS</h3>

          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "20%" }}>
                  <input type="radio"></input>
                </td>
                <td style={{ width: "80%" }}>Advisors</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
      <div className="column">
        <fieldset>
          <h3>STUDENTS</h3>

          <table id="authors" style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "20%" }}>
                  <input type="checkbox" id="checkbox"></input>
                </td>
                <td style={{ width: "80%" }}>Bella</td>
              </tr>
              <tr>
                <td style={{ width: "20%" }}>
                  <input type="checkbox" id="checkbox"></input>
                </td>
                <td style={{ width: "80%" }}>Hyeladi</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
      <div style={{ padding: "10px" }}>
        <input type="button" value="Confirm" />
      </div>
      <div style={{ padding: "10px" }}></div>
    </div>
  );
};
export default RegDesign;
