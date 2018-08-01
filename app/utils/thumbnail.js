export const thumbSize = {
	small: 284,
	medium: 340,
	large: 732,
	maximum: 985
};

/**
 * Normalize image width used to generate a thumbnail
 * so we don't pollute the cache with multiple thumbs for every device width
 *
 * @param {number} width
 * @returns {number}
 */
export function normalizeThumbWidth(width) {
	if (width <= thumbSize.small) {
		return thumbSize.small;
	} else if (width <= thumbSize.medium) {
		return thumbSize.medium;
	} else if (width <= thumbSize.large) {
		return thumbSize.large;
	}

	return thumbSize.maximum;
}

export const transparentImageBase64 = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
