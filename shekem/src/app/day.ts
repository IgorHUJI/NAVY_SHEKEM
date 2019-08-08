export class Day {
    letter: string;
    operatingHours: string;
    responsible: string;

    constructor(letter: string, operatingHours: string, responsible: string) {
        this.letter = letter;
        this.operatingHours = operatingHours;
        this.responsible = responsible;
    }
}