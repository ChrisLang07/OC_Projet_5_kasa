export default async function FetchDatas(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        alert('HTTP Error ! :' + error);
        return [];
    };
};
