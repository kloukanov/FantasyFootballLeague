export class Player{

    public id: number = 0;
    public name: string = "Empty";
    public isSelected: boolean = false;
    public points: number = 0;
    public position: string = "Empty";
    public price: number = 0;

    constructor(id?: number, name?:string){

        if(id === undefined){
            this.id = 0;
        }else{
            this.id = id;
        }
        if(name === undefined){
            this.name = "Empty";
        }else{
            this.name = name;
        }

    }

}