export default class Character {
    name: string;

    origin: string;

    max_hp: number = 50;

    current_hp: number;

    location: string;

    constructor(
        name: string,
        origin: string,
        current_hp: number,
        location: string
    ) {
        this.name = name;
        this.origin = origin;
        this.current_hp = current_hp;
        this.location = location;
    }
}
