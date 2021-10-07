// @formatter:on
export default async function getDatas() {
    const url = "https://api.gill-cote-bistro.fr/specials";
    const response = await fetch(url);
    return response.json();
}
