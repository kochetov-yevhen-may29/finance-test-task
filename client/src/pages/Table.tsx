import React, { useEffect, useRef } from "react";
import { tableRows } from "../utils/tableRows";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { tickerState } from "../redux/slices/tickerSlice";
import { wsConnect, wsDisconnect } from "../redux/slices/socketSlice"
import TableData from "../components/TableData";
import { Ticker } from "../types";

const Table: React.FC = () => {
  const tickers = useAppSelector(tickerState).tickers;
  const dispatch = useAppDispatch();

  const previousTickers = useRef<Ticker[]>([]);

  useEffect(() => {
    dispatch(wsConnect());

    return () => {
      dispatch(wsDisconnect());
    }
  }, []);

  useEffect(() => {
    if (JSON.stringify(tickers) !== JSON.stringify(previousTickers.current)) {
      previousTickers.current = tickers;
    }
  }, [tickers]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {tableRows.map((th) => (
                    <th key={th} scope="col" className="px-6 py-4">
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tickers.map((ticker, index) => (
                  <TableData 
                    index={index}
                    key={ticker.ticker} 
                    ticker={ticker}
                    priceDifference={
                      previousTickers.current[index]
                        ? parseFloat(ticker.price) - parseFloat(previousTickers.current[index].price)
                        : 0
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

