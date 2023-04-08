import LicenseModelModel from "./LicenseModel";
import MeaningModel from "./MeaningModel";

export default interface ResponseModel {
	word?: string;
	phonetics?: [
        {
            audio?: string;
            sourceUrl?: string;
            license?: LicenseModelModel;
        },
        {
            text?: string;
            audio?: string;
            sourceUrl?: string;
            license?: LicenseModelModel;
        },
        {
            text?: string;
            audio?: string;
        }
    ];
    origin?: string;
    meanings: MeaningModel[];
    license?: LicenseModelModel;
    sourceUrls?: string[];
}
