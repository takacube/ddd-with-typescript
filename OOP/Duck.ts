//全ての飛ぶ振る舞いのクラスが実装するインターフェイス

export interface FlyBehavior {
    fly(): string;
}

class FlyWithWings implements FlyBehavior {
    fly() {
        return 'can fly!';
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        return 'can not fly';
    }
}

//
//
//全ての泣く振る舞いのクラスが実装するインターフェイス

export interface QuackBehavior {
    quack(): string | void;
}

export class Quack implements QuackBehavior {
    quack() {
        return 'ガーガー';
    }
}

export class Squeak implements QuackBehavior {
    quack() {
        return 'キューキュー';
    }
}

class MuteQuack implements QuackBehavior {
    quack() {
        console.log('何もしない');
    }
}

//今からメインになるDuckクラスを定義する．

abstract class Duck {
    public static flyBehavior: FlyBehavior;
    public static quackBqhavior: QuackBehavior;

    performQuack() {
        return Duck.quackBqhavior.quack();
    }

    performFly() {
        return Duck.flyBehavior.fly();
    }
}

export class MollarDuck extends Duck {
    constructor() {
        super();
        Duck.quackBqhavior = new Quack();
        Duck.flyBehavior = new FlyWithWings();
    }
}
