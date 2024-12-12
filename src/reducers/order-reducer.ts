import { MenuItemP, OrderItem } from "../types";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItemP } } |
    { type: 'remove-item', payload: { id: MenuItemP['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[]
    tip: number
}

export const initialState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState,
    action: OrderActions
) => {
    if (action.type === 'add-item') {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let order: OrderItem[] = []

        if (itemExist) {
            order = state.order.map((orderItem) => orderItem.id === action.payload.item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 }
                :
                orderItem)
        } else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            order = [...state.order, newItem]
        }

        return {
            ...state,
            order
        }
    }
    if (action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }
    if (action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip: 0
        }
    }
    if (action.type === 'remove-item') {
        const updateOrder: OrderItem[] = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order: updateOrder
        }
    }

    return state
}