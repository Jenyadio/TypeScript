import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        let totalSum = this._items.reduce((sum, current) => {
            return sum + current.price;
        }, 0);
        return totalSum;
    }

    totalSumWithDiscount(discount: number): number {
        return this.totalSum() - (this.totalSum() / 100 * discount);
    }

    deleteItem(id: number): void {
        this._items.splice(this._items.findIndex(item => item.id === id), 1);
    }
}