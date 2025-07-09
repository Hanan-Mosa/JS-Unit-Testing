const User = require("../lab/lab2");

describe('Test Add To Cart Function', () => {
    let user1;
    beforeEach(() => {
        user1 = new User('ali', 123);
    });
    it('check Functionality of add to cart', () => {
        let product = { name: 'table', price: 3000 };
        // addto cart not return so it was undefined
        expect(user1.addToCart(product)).toBeUndefined();
    });
});

describe('Test calculateTotalCartPrice Function', () => {
    let user1;
    beforeEach(() => {
        user1 = new User('ali', 123);
    });
    it('check Functionality of calculateTotalCartPrice', () => {
        expect(user1.calculateTotalCartPrice()).toEqual(jasmine.any(Number));
        //   let product ={name:'table', price:3000};
        //   user1.addToCart(product)
        //    expect(user1.calculateTotalCartPrice()).toBe(3000);
    });
});

describe('Test checkout Function', () => {
    let user1;
    let paymentModel;
    beforeEach(() => {
        user1 = new User('ali', 123);
        // mocking
        paymentModel = jasmine.createSpyObj(['goToVerifyPage', 'returnBack', 'isVerify']);
        paymentModel.goToVerifyPage.and.returnValue();
        paymentModel.returnBack.and.returnValue();
    });
    it('paymentModel methods should be called', () => {

        paymentModel.isVerify.and.returnValue(true);
        user1.checkout(paymentModel);
        expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
        expect(paymentModel.returnBack).toHaveBeenCalled();
        expect(paymentModel.isVerify).toHaveBeenCalled();

    });

    it('should return true if the payment is verified', () => {
        paymentModel.isVerify.and.returnValue(true);
        expect(user1.checkout(paymentModel)).toBeTrue();
    });
    
    it('should return true if the payment isn\'t verified', () => {
        paymentModel.isVerify.and.returnValue(false);
        expect(user1.checkout(paymentModel)).toBeFalse();
    });
});