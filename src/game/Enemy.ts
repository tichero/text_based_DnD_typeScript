export default class Enemy {
    max_hp: number = 50;

    current_hp: number = 50;

    takeDamage(damage: number) {
        this.current_hp -= damage;
    }
}
