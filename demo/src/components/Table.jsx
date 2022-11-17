import React from "react"
import "./table.css"

const Table=()=>{
    return (
      <div className="Table">
        <h1>Table</h1>
        <table className="table" border="1" cellSpacing={1}>
          <thead>
            <tr>
              <th rowSpan={2} colSpan={2}>
                Vehicles
              </th>
              <th colSpan={5}>2017</th>
              <th colSpan={5}>2018</th>
            </tr>

            <tr>
              <th colSpan={2}>Sales</th>
              <th colSpan={2}>Profit</th>
              <th rowSpan={2}>Best Month</th>
              <th colSpan={2}>Sales</th>
              <th colSpan={2}>Profit</th>
              <th rowSpan={2}>Best Month</th>
            </tr>

            <tr>
              <th>Category</th>
              <th>Type</th>
              <th>#</th>
              <th>%</th>
              <th>$</th>
              <th>%</th>
              <th>#</th>
              <th>%</th>
              <th>$</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td" rowSpan={3}>
                Cars
              </td>
              <td className="td">Utility</td>
              <td>1</td>
              <td>4.3%</td>
              <td>$500</td>
              <td>0%</td>
              <td>August</td>
              <td>3</td>
              <td>14.3%</td>
              <td>$1.5000</td>
              <td>1.7%</td>
              <td>July</td>
            </tr>

            <tr>
              <td className="td">Y-Class Lux</td>
              <td className="td1">0</td>
              <td className="td1">0%</td>
              <td className="td1">$0</td>
              <td className="td1">0%</td>
              <td className="td1"></td>
              <td className="td1">1</td>
              <td className="td1">4.8%</td>
              <td className="td1">$5.000</td>
              <td className="td1">5.6%</td>
              <td className="td1">January</td>
            </tr>

            <tr>
              <td className="td">Rustbox</td>
              <td>1</td>
              <td>4.3%</td>
              <td>$1.35</td>
              <td>0%</td>
              <td>february</td>
              <td>0</td>
              <td>0%</td>
              <td>$0</td>
              <td>0%</td>
              <td></td>
            </tr>

            <tr>
              <td className="td">Trucks</td>
              <td className="td">A Large One</td>
              <td className="td1">10</td>
              <td className="td1">43.5%</td>
              <td className="td1">$100.000</td>
              <td className="td1">0.3%</td>
              <td className="td1">November</td>
              <td className="td1">3</td>
              <td className="td1">14.3%</td>
              <td className="td1">$30.000</td>
              <td className="td1">33.5%</td>
              <td className="td1">July</td>
            </tr>
            <tr>
              <td className="td" rowSpan={2}>
                Starifighters
              </td>
              <td className="td">S-Wing</td>
              <td>4</td>
              <td>17.5%</td>
              <td>$200.000</td>
              <td>0.7%</td>
              <td>December</td>
              <td>1</td>
              <td>4.8%</td>
              <td>$50.000</td>
              <td>55.9%</td>
              <td>July</td>
            </tr>

            <tr>
              <td className="td">The Century Hawk</td>
              <td className="td1">1</td>
              <td className="td1">4.3%</td>
              <td className="td1">$2.6bn</td>
              <td className="td1">99.5%</td>
              <td className="td1">December</td>
              <td className="td1">0</td>
              <td className="td1">0%</td>
              <td className="td1">$0</td>
              <td className="td1">0%</td>
              <td className="td1"></td>
            </tr>

            <tr>
              <td className="td" rowSpan={4}>
                Tricycles
              </td>
              <td className="td">S-Wing</td>
              <td>4</td>
              <td>17.5%</td>
              <td>$200.000</td>
              <td>0.7%</td>
              <td>December</td>
              <td>1</td>
              <td>4.8%</td>
              <td>$50.000</td>
              <td>55.9%</td>
              <td>June</td>
            </tr>
            <tr>
              <td className="td">S-Wing</td>
              <td className="td1">4</td>
              <td className="td1">17.5%</td>
              <td className="td1">$200.000</td>
              <td className="td1">0.7%</td>
              <td className="td1">December</td>
              <td className="td1">1</td>
              <td className="td1">4.8%</td>
              <td className="td1">$50.000</td>
              <td className="td1">55.9%</td>
              <td className="td1">July</td>
            </tr>
            <tr>
              <td className="td">S-Wing</td>
              <td>4</td>
              <td>17.5%</td>
              <td>$200.000</td>
              <td>0.7%</td>
              <td>December</td>
              <td>1</td>
              <td>4.8%</td>
              <td>$50.000</td>
              <td>55.9%</td>
              <td>September</td>
            </tr>
            <tr>
              <td className="td">S-Wing</td>
              <td className="td1">4</td>
              <td className="td1">17.5%</td>
              <td className="td1">$200.000</td>
              <td className="td1">0.7%</td>
              <td className="td1">December</td>
              <td className="td1">1</td>
              <td className="td1">4.8%</td>
              <td className="td1">$50.000</td>
              <td className="td1">55.9%</td>
              <td className="td1">March</td>
            </tr>
            <tr>
              <th colSpan={2}>Totals</th>
              <th colSpan={2}>23</th>
              <th colSpan={2}>$2612057346</th>
              <th>December</th>
              <th colSpan={2}>21</th>
              <th colSpan={2}>$89386</th>
              <th>July</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
export default Table