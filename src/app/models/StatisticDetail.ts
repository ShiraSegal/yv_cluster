import { LastName } from "./LastName";
import { LastNameInPlaces } from "./LastNameInPlaces";

export class StatisticDetail {
    lastName: LastName;
    lastNameInPlaces: LastNameInPlaces;

    constructor(lastName: LastName, lastNameInPlaces: LastNameInPlaces) {
        this.lastName = lastName;
        this.lastNameInPlaces = lastNameInPlaces;
    }
}