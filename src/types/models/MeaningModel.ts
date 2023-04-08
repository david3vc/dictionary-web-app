import DefinitionModel from "./DefinitionModel";

export default interface MeaningModel {
	partOfSpeech: string;
	definitions: DefinitionModel[];
	synonyms: string[];
  	antonyms: string[];
}
