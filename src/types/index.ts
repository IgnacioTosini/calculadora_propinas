export type MenuItemP = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItemP & {
    quantity: number
}