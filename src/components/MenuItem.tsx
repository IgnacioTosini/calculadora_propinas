import { Dispatch } from "react"
import { MenuItemP } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItemP,
    dispatch: Dispatch<OrderActions>
}
export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
    return (
        <button className="border-2 border-orange-500 hover:bg-orange-700 w-full p-3 flex justify-between"
            onClick={() => { dispatch({ type: 'add-item', payload: { item: item } }) }}>
            <p>{item.name}</p>
            <p className=" font-black">${item.price}</p>
        </button>
    )
}
