export interface FlyBehanior {
  fly: () => void;
}

export interface QuackBehavior {
  quack: () => void;
}

// concrete strategy quack behavior classes
export class Quack implements QuackBehavior {
  public quack() {
    console.log("Ouack");
  }
}

export class MuteQuack implements QuackBehavior {
  public quack() {
    console.log("MuteOuack");
  }
}

export class SqueakQuack implements QuackBehavior {
  public quack() {
    console.log("SqueakQuack");
  }
}

// concrete strategy fly behavior classes
export class FlyWithWings implements FlyBehanior {
  public fly() {
    console.log("Fly");
  }
}

export class FlyNoWay implements FlyBehanior {
  public fly() {
    console.log("I can't fly");
  }
}

export class FlyRocketPowered implements FlyBehanior {
  public fly() {
    console.log("I am flying with a rocket");
  }
}

export abstract class Duck {

  constructor(
    private flyBehavior: FlyBehanior,
    private quackBehavior: QuackBehavior
  ) {}

  public abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log("All ducks float!");
  }

  public setFlyBehavior(flyBehavior: FlyBehanior) : void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior) : void {
    this.quackBehavior = quackBehavior;
  }
}

export class MallardDuck extends Duck {
  constructor(
    flyBehavior: FlyBehanior = new FlyWithWings(),
    quackBehavior: QuackBehavior = new Quack()
  ) {
    super(flyBehavior, quackBehavior);
  }

  public display(): void {
    console.log("I'm a Mallard duck");
  }
}

export class ModelDuck extends Duck {
  constructor(
    flyBehavior: FlyBehanior = new FlyNoWay(),
    quackBehavior: QuackBehavior = new SqueakQuack()
  ) {
    super(flyBehavior, quackBehavior);
  }

  public display(): void {
    console.log("I'm a model duck");
  }
}

export class MiniDuckSimulator {
  public static main(): void {
    let mallard: Duck;

    mallard = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
    mallard.display();

    let model = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
    model.swim();
  }
}
