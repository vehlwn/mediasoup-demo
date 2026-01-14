import qs from 'qs';

const hostname = window.location.hostname;
const protocol = 'wss';

export function getProtooUrl(params) {
	const query = qs.stringify(params);

	return `${protocol}://${hostname}/ws?${query}`;
}
