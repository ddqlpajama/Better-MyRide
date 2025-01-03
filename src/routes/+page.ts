import { PUBLIC_IPINFO_TOKEN } from "$env/static/public";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	try {
		const response = await fetch(`https://ipinfo.io/json?token=${PUBLIC_IPINFO_TOKEN}`);
		if (!response.ok) throw new Error('Failed to fetch IP location');
		const data = await response.json();
		const [lat, lon] = data.loc.split(',').map(Number);
		return { lat, lon };
	} catch (error) {
		console.error('IP-based location failed:', (error as Error).message);
		throw error;
	}
}

