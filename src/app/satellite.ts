export class Satellite {
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
        name: string;
        orbitType: string;
        type: string;
        operational: boolean;
        launchDate: string;
        shouldShowWarning(){
            return (this.type.toLowerCase() === "space debris");
    }
}
