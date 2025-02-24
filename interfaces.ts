export interface Welcome {
    id:          number;
    name:        string;
    description: string;
    age:         number;
    isActive:    boolean;
    birthDate:   Date;
    imageUrl:    string;
    status:      Status;
    hobbies:     string[];
    weapon:      Weapon;
}

export enum Status {
    Alive = "Alive",
    Deceased = "Deceased",
}

export interface Weapon {
    id:        number;
    name:      string;
    type:      string;
    isMagical: boolean;
    imageUrl:  string;
}
