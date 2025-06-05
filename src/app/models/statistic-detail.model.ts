import { lastName } from "./last-name.model";
import { lastNameInPlaces } from "./last-name-inplaces.model";

export class statisticDetail {
    lastName: lastName;
    lastNameInPlaces: lastNameInPlaces;

    constructor(lastName: lastName, lastNameInPlaces: lastNameInPlaces) {
        this.lastName = lastName;
        this.lastNameInPlaces = lastNameInPlaces;
    }
}