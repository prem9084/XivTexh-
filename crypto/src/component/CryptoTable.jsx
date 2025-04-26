import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CryptoRow from "./CryptoRow.jsx";
import { updateAsset } from "../feature/CrypetoSlice.js";
import { getRandomPriceChange } from "../utils/RandomUtils.js";

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      assets.forEach((asset) => {
        const updatedFields = getRandomPriceChange(asset);
        dispatch(updateAsset({ id: asset.id, updatedFields }));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Logo</th>
            <th className="p-2">Name</th>
            <th className="p-2">Symbol</th>
            <th className="p-2">Price</th>
            <th className="p-2">1h%</th>
            <th className="p-2">24h%</th>
            <th className="p-2">7d%</th>
            <th className="p-2">Market Cap</th>
            <th className="p-2">24h Volume</th>
            <th className="p-2">Circulating Supply</th>
            <th className="p-2">Max Supply</th>
            <th className="p-2">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
