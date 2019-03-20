interface Istate<T, U> {
    readonly status?: T
    readonly reservoir?: U
    message?: string
}
class Voiture {
    private marque: string
    private model: string
    private couleur: string
    private reservoir: number
    private capaciteMax: number
    private consomation: number = 20
    private temps: number = 1000
    private status: string

    constructor(
        marque: string,
        model: string,
        couleur: string,
        capaciteMax: number
    ) {
        this.marque = marque
        this.model = model
        this.couleur = couleur
        this.capaciteMax = capaciteMax
        this.status = 'arrêt'
        this.reservoir = 0
    }

    get getMarque() {
        return this.marque
    }
    get getModel() {
        return this.model
    }
    get getCouleur(): string {
        return this.couleur
    }

    get getReservoir(): number {
        return this.reservoir
    }

    set setReservoir(ajoutReservoir: number) {
        if (this.reservoir + ajoutReservoir <= this.capaciteMax) {
            this.reservoir += ajoutReservoir
        }
    }

    public fairePlein(): void {
        for (let i = this.reservoir; i <= this.capaciteMax; i++) {
            this.reservoir = i
        }
    }

    public demarer(): Istate<string, number> {
        if (this.reservoir === 0 && this.status === 'demarer') {
            this.status = 'arrêt'
            return {
                message: "Vous n'avez plus d'essence",
                status: this.status,
            }
        } else {
            this.status = 'demarer'
        }
        return { status: this.status, reservoir: this.reservoir }
    }
}

const mavoiture = new Voiture('Peugeot', '308', 'Rouge', 70000)

// console.log("Première Voiture: ", mavoiture);
// console.log("coueleur:", mavoiture.getCouleur);
// console.log("Le reservoir est vide: ", mavoiture.getReservoir);
mavoiture.setReservoir = 20
// console.log("On a ajouter: ", mavoiture.getReservoir, "au reservoir");
mavoiture.setReservoir = 100
// console.log("Le reservoire reste a : ", mavoiture.getReservoir, "parce que on a essayer d ajouter 100");
mavoiture.setReservoir = 30
// console.log("on ajoute 30 au reservoir le total est : ", mavoiture.getReservoir);

// console.log("on fait le plein", mavoiture.fairePlein());

// console.log("on a fait le pleins le reservoir doit être à", mavoiture.getReservoir);

async function main() {
    // console.log(await mavoiture.demarer());
    // console.log(await mavoiture.demarer());
}
// main();
