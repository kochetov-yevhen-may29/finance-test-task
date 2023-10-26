import React from "react"
import { Ticker } from "../types"
import ButtonBlack from "./ButtonBlack"
import ButtonRed from "./ButtonRed"

type Props = {
  ticker: Ticker
  index: number
  priceDifference: number
}

const TableData: React.FC<Props> = ({ ticker, index, priceDifference }) => {
  return (
    <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800 hover:bg-stone-300 transition">
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        {index % 2 === 0 && <ButtonBlack>{ticker.ticker}</ButtonBlack>}
        {index % 2 !== 0 && <ButtonRed>{ticker.ticker}</ButtonRed>}
      </td>
      <td className="body-td">{ticker.exchange}</td>
      <td className="body-td">
        {ticker.price}
        {priceDifference !== 0 && (
          <span
            className={
              priceDifference > 0 ? " text-green-500" : " text-red-500"
            }
          >
            {" "}
            ({priceDifference > 0 ? "+" : "-"}$
            {Math.abs(priceDifference).toFixed(2)})
          </span>
        )}
      </td>
      <td className="body-td">{ticker.change}</td>
      <td className="body-td">{ticker.change_percent}</td>
      <td className="body-td">{ticker.dividend}</td>
      <td className="body-td">{ticker.yield}</td>
      <td className="body-td">{ticker.last_trade_time}</td>
    </tr>
  )
}

export default TableData
