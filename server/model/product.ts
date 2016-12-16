export class Product {
    private id: number;
    constructor(id: number, public name: string, public quantity: number = 0) {
        this.id = id;
    }
    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string)
    {
      this.name = name;
    }
    public updateQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }
    public addProducts(addedQuantity: number) {
        this.quantity += addedQuantity;
    }
    public subtrackProducts(subtrackedQuantity: number) {
        this.quantity -= subtrackedQuantity;
    }
}
