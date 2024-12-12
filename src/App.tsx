import { useReducer } from "react"
import { MenuItem } from "./components/MenuItem"
import { OrderContents } from "./components/OrderContents"
import { OrderTotals } from "./components/OrderTotals"
import { TipPercentage } from "./components/TipPercentage"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-orange-600 py-5">
        <h1 className=" text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto mt-20 py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch}></MenuItem>
            ))}
          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch}></OrderContents>
              <TipPercentage dispatch={dispatch} tip={state.tip}></TipPercentage>
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch}></OrderTotals>
            </>
          ) :
            (
              <p>La order esta vacia</p>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
