import * as readlineSync from 'readline-sync'
class Voiture {
    private marque: string
    private model: string
    private couleur: string
    private reservoir: number
    private capaciteMax: number
    private consomation: number = 20
    private status: string
    private start: number = 0
    private essenceConsommer: number = 0

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

    public updateReservoir(): void {
        if (this.reservoir <= 0) {
            console.log("vous n'avez plus d'essence")
            this.status = 'arreter'
        }
        if (this.status === 'demarer') {
            this.essenceConsommer =
                this.essenceConsommer > this.reservoir
                    ? (this.essenceConsommer = this.reservoir)
                    : (this.essenceConsommer = Math.round(
                          ((Date.now() - this.start) * this.consomation) / 1000
                      ))
            console.log(
                'essence consommer: ',
                this.essenceConsommer,
                'essence restant: ',
                this.reservoir
            )
            this.reservoir = this.reservoir - this.essenceConsommer
        }
    }
    public testReservoir(): void {
        while (this.status === 'demarer') {
            const key = readlineSync.question(
                'Tapez sur entrer pour voir la consomation de votre carburant: '
            )
            this.updateReservoir()
            if (key === 'a') {
                console.log(this.reservoir)
            }
        }
    }
    public demarer(): void | string {
        if (this.reservoir === 0) {
            return "Vous n'avez pas d'essence"
        } else if (this.status === 'demarer') {
            return 'Vous êtes déjà en démarage'
        }
        this.start = Date.now()
        this.status = 'demarer'
    }
}

const mavoiture = new Voiture('Peugeot', '308', 'Rouge', 2000)

// console.log("Première Voiture: ", mavoiture);
// console.log("coueleur:", mavoiture.getCouleur);
// console.log("Le reservoir est vide: ", mavoiture.getReservoir);
//mavoiture.setReservoir = 20
// console.log("On a ajouter: ", mavoiture.getReservoir, "au reservoir");
//mavoiture.setReservoir = 100
// console.log("Le reservoire reste a : ", mavoiture.getReservoir, "parce que on a essayer d ajouter 100");
//mavoiture.setReservoir = 30
// console.log("on ajoute 30 au reservoir le total est : ", mavoiture.getReservoir);

// console.log("on fait le plein", mavoiture.fairePlein());

// console.log("on a fait le pleins le reservoir doit être à", mavoiture.getReservoir);

mavoiture.fairePlein()
mavoiture.demarer()
mavoiture.testReservoir()
