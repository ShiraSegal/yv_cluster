import { LastName } from "./last-name.model";
import { LastNameInPlaces } from "./last-name-inplaces.model";

export class StatisticDetail {
    lastName: LastName;
    lastNameInPlaces: LastNameInPlaces;

    constructor(lastName: LastName, lastNameInPlaces: LastNameInPlaces) {
        this.lastName = lastName;
        this.lastNameInPlaces = lastNameInPlaces;
    }
}