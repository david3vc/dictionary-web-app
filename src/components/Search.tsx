import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import iconoSearch from "../assets/images/icon-search.svg";
import "../styles/search.css";
import { INPUT_DARK_THEME, INPUT_LIGHT_THEME, LIGHT_THEME } from "../constants";
import useFindWord from "../hooks/useFindWord";
import { ResponseModel } from "../types";

interface baseProps {
    theme: string;
    setData: React.Dispatch<React.SetStateAction<ResponseModel[]>>;
}

const Search = ({ theme, setData }: baseProps) => {
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

    const { data: wordData, mutateAsync: searchWord, isSuccess } = useFindWord();

    const [themeInput, setThemeInput] = useState(INPUT_DARK_THEME);

    useEffect(() => {
        if (theme === LIGHT_THEME) setThemeInput(INPUT_DARK_THEME);
        else setThemeInput(INPUT_LIGHT_THEME);
    }, [theme]);

    useEffect(()=>{
        if (isSuccess) {
            console.log(wordData)
            setData?.(wordData);
        }
    },[isSuccess])

    return (
        <>
            <div className={`container-search ${themeInput}`}>
                <div className="container-search__input">
                    <input
                        type="text"
                        className={themeInput}
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
            {(formik.touched.word ?? false) && formik.errors.word != null && (
                <small className="text-danger">{formik.errors.word}</small>
            )}
        </>
    );
};

export default Search;
