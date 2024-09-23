import { useState } from "react";

export default function CardExpense() {
  const [dados] = useState([
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ]);
    
  //const totalAmount = dados.reduce((acc, item) => acc + item.amount, 0);

  const calcularAltura = (valor) => {
    return valor * 5;
  };
  return (
    <div className="h-/4 w-4/12 bg-white rounded-lg p-10 flex flex-col justify-between">
      <p className="text-black font-medium text-3xl">Spending - Last 7 days</p>
      <div className="w-full flex justify-between items-end my-10">
        {dados.map((item) => (
          <div className="flex flex-col justify-center items-center group">
            <div className="text-white w-20 h-12 flex justify-center items-center font-semibold text-xl rounded-md bg-amber-950 opacity-0 group-hover:opacity-100 transition-opacity duration-100 mb-2">${item.amount}</div>
            <div
              style={{ height: `${calcularAltura(item.amount)}px` }}
              className="w-14 bg-orange-400 rounded-md"
            ></div>
            <p className="text-gray-400">{item.day}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full border-t-2 pt-4">
        <div className="flex flex-col w-full">
          <p className="text-gray-400">Total this month</p>
          <div className="w-full flex justify-between">
            <p className="text-4xl font-bold">$478.33</p>
            <div className="flex flex-col items-end">
              <p className="font-bold">+2.4%</p>
              <p className="text-gray-400">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
