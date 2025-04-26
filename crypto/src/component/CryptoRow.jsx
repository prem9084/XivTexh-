import React from "react";
import ChartPlaceholder from "./ChartPlaceholder";
import Bitoin from "../assets/Bitcoin.svg.png";
const formatNumber = (num) => {
  return num?.toLocaleString();
};

const CryptoRow = ({ asset, index }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2 text-center">{index}</td>
      <td className="p-2 text-center">
        <img
          src={asset?.logoUrl}
          alt={asset.name}
          className="w-6 h-6 mx-auto"
        />
      </td>
      <td className="p-2 text-center">{asset.name}</td>
      <td className="p-2 text-center">{asset.symbol}</td>
      <td className="p-2 text-center">${formatNumber(asset.price)}</td>
      <td
        className={`p-2 text-center ${
          asset.percentChange1h >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {asset.percentChange1h.toFixed(2)}%
      </td>
      <td
        className={`p-2 text-center ${
          asset.percentChange24h >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {asset.percentChange24h.toFixed(2)}%
      </td>
      <td
        className={`p-2 text-center ${
          asset.percentChange7d >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {asset.percentChange7d.toFixed(2)}%
      </td>
      <td className="p-2 text-center">${formatNumber(asset.marketCap)}</td>
      <td className="p-2 text-center">${formatNumber(asset.volume24h)}</td>
      <td className="p-2 text-center">{asset.circulatingSupply}M</td>
      <td className="p-2 text-center">
        {asset.maxSupply ? `${asset.maxSupply}M` : "∞"}
      </td>
      <td className="p-2 text-center">
        <ChartPlaceholder chartImageUrl={asset.chartImageUrl} />
      </td>
    </tr>
  );
};

export default CryptoRow;
