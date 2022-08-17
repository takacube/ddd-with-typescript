export interface Animal {
    makeSound(): string;
}

export class Dog implements Animal {
    makeSound() {
        return 'わんわん';
    }
}

export class Cat implements Animal {
    makeSound() {
        return 'ニャンニャン';
    }
}
