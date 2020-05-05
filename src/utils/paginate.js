import _ from "lodash";

export const paginate = (data, pageSize, pageNumber) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return _(data).slice(startIndex).take(pageSize).value();
};
