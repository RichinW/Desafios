import { useState, useEffect } from "react";

export default function CardExpense() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("../../public/_data/data.json")
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

  const handleResize = () => {
    setTamanhoTela(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-2/4 md:h-3/5 2xl:h-2/3 md:w-10/12 w-11/12 2xl:w-4/12 bg-white rounded-3xl p-4 md:p-10 2xl:p-10 flex flex-col justify-between">
      <p className="text-black font-bold text-2xl md:text-4xl lg:text-6xl 2xl:text-3xl">Spending - Last 7 days</p>
      <div className="w-full flex justify-between md:justify-around 2xl:justify-between items-end md:my-4 2xl:my-10 ">
        {dados.map((item) => (
          <div className="flex max-w-10 flex-col justify-center items-center group">
            <div className="text-white w-12 2xl:w-20 md:w-20 lg:w-28 md:h-12 lg:h-20 h-8 2xl:h-12 flex justify-center items-center font-semibold text-sm md:text-2xl lg:text-3xl 2xl:text-xl rounded-md bg-amber-950 opacity-0 group-hover:opacity-100 transition-opacity duration-100 mb-2">${item.amount}</div>
            <div
              style={{ height: tamanhoTela > 500 ? `${(item.amount * 4.5)}px` : `${(item.amount * 3)}px` }}
              className="w-10 2xl:w-16 md:w-16 lg:w-20 bg-orange-400 rounded-md group-hover:bg-blue-400 transition-all duration-300"
            ></div>
            <p className="text-gray-400 text-sm md:text-xl lg:text-3xl 2xl:text-base">{item.day}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full border-t-2 pt-4">
        <div className="flex flex-col w-full">
          <p className="text-gray-400 lg:text-3xl 2xl:text-base md:text-2xl">Total this month</p>
          <div className="w-full flex justify-between">
            <p className="text-4xl font-bold lg:text-6xl 2xl:text-5xl md:text-6xl">$478.33</p>
            <div className="flex flex-col items-end">
              <p className="font-bold lg:text-3xl md:text-2xl 2xl:text-lg">+2.4%</p>
              <p className="text-gray-400 lg:text-3xl md:text-2xl 2xl:text-lg">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
