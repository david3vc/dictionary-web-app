import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import iconoSearch from "../assets/images/icon-search.svg";
import "../styles/search.css";
import { INITIAL_SEARCH, INPUT_DARK_THEME, INPUT_LIGHT_THEME, LIGHT_THEME } from "../constants";
import useFindWord from "../hooks/useFindWord";
import { ResponseModel } from "../types";

interface baseProps {
    theme: string;
    setData: React.Dispatch<React.SetStateAction<ResponseModel[]>>;
    typography: string;
}

const Search = ({ theme, setData, typography }: baseProps) => {
    const formik = useFormik({
        initialValues: {
            word: "",
        },
        validationSchema: Yup.object().shape({
            word: Yup.string()
                .trim()
                .nullable()
                .required("Whoops, can´t be empty..."),
        }),
        onSubmit: (values) => searchWord(values.word),
    });

    const {
        data: wordData,
        mutateAsync: searchWord,
        isSuccess,
    } = useFindWord();

    const [themeInput, setThemeInput] = useState(INPUT_DARK_THEME);

    useEffect(() => {
        if (theme === LIGHT_THEME) setThemeInput(INPUT_DARK_THEME);
        else setThemeInput(INPUT_LIGHT_THEME);
    }, [theme]);

    useEffect(() => {
        if (isSuccess) setData?.(wordData);
    }, [isSuccess]);

    useEffect(() => {
        searchWord(INITIAL_SEARCH);
    }, []);

    return (
        <>
            <div className={`container-search ${themeInput} ${typography}`}>
                <div className="container-search__input">
                    <input
                        type="text"
                        className={`${themeInput} ${typography} search__input`}
                        name="word"
                        value={formik.values.word ?? ""}
                        onChange={formik.handleChange}
                    />
                </div>
                <div
                    className="container-search__icon"
                    onClick={() => formik.handleSubmit()}
                >
                    <img src={iconoSearch} alt="" />
                </div>
            </div>
            <div className="validation-search">
                {(formik.touched.word ?? false) &&
                    formik.errors.word != null && (
                        <small className={`text-danger ${typography}`}>
                            {formik.errors.word}
                        </small>
                    )}
            </div>
        </>
    );
};

export default Search;
