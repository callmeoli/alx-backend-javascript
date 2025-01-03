import Currency from "./3-currency.js";

export default class Pricing {
    constructor(amount, currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError('currency must be an instance of Currency');
        }
        this._amount = amount;
        this._currency = currency; // Contain a Currency instance
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }

    get currency() {
        return this._currency;
    }

    set currency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError('currency must be an instance of Currency');
        }
        this._currency = currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }
}

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());