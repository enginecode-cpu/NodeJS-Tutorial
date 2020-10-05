class Robot {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name}`);
    }
}

class AI extends Robot {
    constructor(name) {
        super(name);
    }
    like() {
        console.log(`좋아하는 것: 가족`);
    }
}

const robot = new Robot('신짱구');
robot.speak();

const robotFather = new AI('로봇 신형만');
robotFather.speak();
robotFather.like();
