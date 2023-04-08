import { UseMutationResult, useMutation } from "react-query";
import { ResponseModel } from "../types";
import { FetchError } from "../utils";
import { WordService } from "../services";

const useFindWord = (): UseMutationResult<ResponseModel[], FetchError<ResponseModel[]>, string> => {
	return useMutation({
		mutationFn: async (word: string) =>
			await WordService.find(word).then(res => res.data),
	});
};

export default useFindWord;
