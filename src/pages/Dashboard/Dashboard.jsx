import { FaUsers } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
        {/* Barra lateral */}
        <div
          id="sideNav"
          className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none"
        >
          {/* Items */}
          <div className="p-4 space-y-4">
            {/* Inicio */}
            <a
              href="#"
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            >
                <FaUsers></FaUsers>
              <span className="-mr-1 font-medium"> Manage User</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-wallet" />
              <span>Billetera</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-exchange-alt" />
              <span>Transacciones</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-user" />
              <span>Mi cuenta</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-sign-out-alt" />
              <span>Cerrar sesión</span>
            </a>
          </div>
        </div>
        <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
          {/* Buscador */}
          <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
            <div className="flex items-center">
              <i className="px-3 fas fa-search ml-1" />
              <input
                type="text"
                placeholder="Buscar..."
                className="ml-3 focus:outline-none w-full"
              />
            </div>
          </div>
          {/* Contenedor Principal */}
          <div className="lg:flex gap-4 items-stretch">
            {/* Caja Grande */}
            <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
              <div className="flex justify-center items-center space-x-5 h-full">
                <div>
                  <p>Saldo actual</p>
                  <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
                  <p>25.365 $</p>
                </div>
                <img
                  src="https://www.emprenderconactitud.com/img/Wallet.png"
                  alt="wallet"
                  className="h-24 md:h-20 w-38"
                />
              </div>
            </div>
            {/* Caja Blanca */}
            <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
              {/* Cajas pequeñas */}
              <div className="flex flex-wrap justify-between h-full">
                {/* Caja pequeña 1 */}
                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                  <i className="fas fa-hand-holding-usd text-white text-4xl" />
                  <p className="text-white">Depositar</p>
                </div>
                {/* Caja pequeña 2 */}
                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                  <i className="fas fa-exchange-alt text-white text-4xl" />
                  <p className="text-white">Transferir</p>
                </div>
                {/* Caja pequeña 3 */}
                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                  <i className="fas fa-qrcode text-white text-4xl" />
                  <p className="text-white">Canjear</p>
                </div>
              </div>
            </div>
          </div>
          {/* Tabla */}
          <div className="bg-white rounded-lg p-4 shadow-md my-4">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left border-b-2 w-full">
                    <h2 className="text-ml font-bold text-gray-600">Transacciones</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b w-full">
                  <td className="px-4 py-2 text-left align-top w-1/2">
                    <div>
                      <h2>Comercio</h2>
                      <p>24/07/2023</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                    <p>
                      <span>150$</span>
                    </p>
                  </td>
                </tr>
                <tr className="border-b w-full">
                  <td className="px-4 py-2 text-left align-top w-1/2">
                    <div>
                      <h2>Comercio</h2>
                      <p>24/06/2023</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                    <p>
                      <span>15$</span>
                    </p>
                  </td>
                </tr>
                <tr className="border-b w-full">
                  <td className="px-4 py-2 text-left align-top w-1/2">
                    <div>
                      <h2>Comercio</h2>
                      <p>02/05/2023</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                    <p>
                      <span>50$</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Script  */}
      </>
      
    );
};

export default Dashboard;