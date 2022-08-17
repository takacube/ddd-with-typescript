import { Dog, Animal } from '../../Animal';
import { QuackBehavior, Quack, Squeak } from '../../Duck';
import { MollarDuck } from '../../Duck';
test('TestDog', () => {
    const animal: Animal = new Dog();
    expect(animal.makeSound()).toBe('わんわん');
});

describe('Duck Test', () => {
    test('quack', () => {
        const quack: QuackBehavior = new Quack();
        expect(quack.quack()).toBe('ガーガー');
    });

    test('squack', () => {
        const quack: QuackBehavior = new Squeak();
        expect(quack.quack()).toBe('キューキュー');
    });

    test('test duck', () => {
        const duck = new MollarDuck();
        expect(duck.performQuack()).toBe('ガーガー');
    });
});
