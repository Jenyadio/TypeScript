import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly country: string,
        readonly price: number,
        readonly year: number
    ) { }
}