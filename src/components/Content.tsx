import { useEffect, useState } from "react";
import { DefinitionModel, MeaningModel, ResponseModel } from "../types";
import "../styles/content.css";

interface baseProps {
    data: ResponseModel[];
    typography: string;
}

const Content = ({ data, typography }: baseProps) => {
    const meanings: MeaningModel[] = data.flatMap((item) => item.meanings);

    const allEqual: boolean = meanings.every(
        (item) => item.partOfSpeech === meanings[0].partOfSpeech
    );

    const partOfSpeechs: string[] = meanings.flatMap(
        (item) => item.partOfSpeech
    );
    const antonyms: string[] = meanings.flatMap((item) => item.antonyms);
    const synonyms: string[] = meanings.flatMap((item) => item.synonyms);
    const definitions: DefinitionModel[] = meanings.flatMap(
        (item) => item.definitions
    );
    const meaning: MeaningModel = {
        antonyms,
        definitions,
        synonyms,
        partOfSpeech: partOfSpeechs.length > 0 ? partOfSpeechs[0] : "",
    };

    return (
        <div className={`container-content ${typography}`}>
            <div className="container-content__lista">
                {allEqual === false ? (
                    meanings.length > 0 &&
                    meanings.map((item, index) => (
                        <>
                            <div className="lista__partOfSpeech">
                                <span className="lista__partOfSpeech__bold">
                                    {item.partOfSpeech}
                                </span>
                                <div className="lista__partOfSpeech__line" />
                            </div>

                            {meaning.partOfSpeech !== "" && <p>Meaning</p>}
                            {item.definitions.length > 0 &&
                                item.definitions.map((definition, i) => (
                                    <ul key={i} className="lista__meanings">
                                        <li>{definition.definition}</li>
                                    </ul>
                                ))}
                            <div className="lista__synonyms">
                                {item.synonyms.length > 0 && (
                                    <span className="lista__synonyms__term">
                                        Synonyms
                                    </span>
                                )}
                                <div className="lista__synonyms__collection">
                                    {item.synonyms.length > 0 &&
                                        item.synonyms.map((synonym, i) => (
                                            <span className="lista__synonyms__item">{`${synonym} `}</span>
                                        ))}
                                </div>
                            </div>
                            <div className="lista__antonyms">
                                {item.antonyms.length > 0 && (
                                    <span className="lista__antonyms__term">
                                        Antonyms
                                    </span>
                                )}
                                <div className="lista__antonyms__collection">
                                    {item.antonyms.length > 0 &&
                                        item.antonyms.map((antonym, i) => (
                                            <span className="lista__antonyms__item">{`${antonym} `}</span>
                                        ))}
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <>
                        <div className="lista__partOfSpeech">
                            <span className="lista__partOfSpeech__bold">
                                {meaning.partOfSpeech}
                            </span>
                            <div className="lista__partOfSpeech__line" />
                        </div>

                        {meaning.partOfSpeech !== "" && <p>Meaning</p>}
                        {meaning.definitions.length > 0 &&
                            meaning.definitions.map((definition, i) => (
                                <ul key={i} className="lista__meanings">
                                    <li>{definition.definition}</li>
                                </ul>
                            ))}

                        <div className="lista__synonyms">
                            {meaning.synonyms.length > 0 && (
                                <span className="lista__synonyms__term">
                                    Synonyms
                                </span>
                            )}
                            <div className="lista__synonyms__collection">
                                {meaning.synonyms.length > 0 &&
                                    meaning.synonyms.map((synonym, i) => (
                                        <span className="lista__synonyms__item">{`${synonym} `}</span>
                                    ))}
                            </div>
                        </div>
                        <div className="lista__antonyms">
                            {meaning.antonyms.length > 0 && (
                                <span className="lista__antonyms__term">
                                    Antonyms
                                </span>
                            )}
                            <div className="lista__antonyms__collection">
                                {meaning.antonyms.length > 0 &&
                                    meaning.antonyms.map((antonym, i) => (
                                        <span className="lista__antonyms__item">{`${antonym} `}</span>
                                    ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Content;
