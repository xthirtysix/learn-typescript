/*
 *  Implement shopping card wich can:
 *  - Add products to cart
 *  - Remove products by Id
 *  - Calculate price of all products in a cart
 *  - Set delivery
 *  - Checkout (tell that everything's fine if cart has a product and delivery is set)
 *
 *  Product: id, name, price
 *  Delivery: home - date, adress, shop - date is today, shop id
 * */

class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class Delivery {
    constructor(public date: Date) {}
}

class DeliveryHome extends Delivery {
    constructor(public date: Date, public adress: string) {
        super(date);
    }
}

class DeliveryShop extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    }
}

interface DeliveryHome extends Delivery {
    adress: string;
}

interface DeliveryPoint {}

class ShoppingCart {
    public products: Product[] = [] as Product[];
    public delivery: Delivery = {} as Delivery;

    public addToCart(product: Product): void {
        this.products.push(product);
    }

    public removeFromCart(productId: number): void {
        this.products = this.products.filter(
            (product) => product.id !== productId,
        );
    }

    public calculatePrice(): number {
        return this.products.reduce((acc, product) => {
            return (acc += product.price);
        }, 0);
    }

    public setDelivery(delivery: Delivery): void {
        this.delivery = delivery;
    }

    public checkout() {
        return (this.products.length > 0 && this.delivery.date)
            ? console.log('Checkout completed')
            : console.error('No products added or delivery set');
    }
}
