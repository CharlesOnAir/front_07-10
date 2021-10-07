// @formatter:on
import getDatas from './query.js';

async function displayDatas() {
    try {
        const content = await getDatas();
        content.forEach(element => {
                document.getElementById("donnees").innerHTML += "<h3>Titre : "+element['title']+"</h3> <br /> <img src='https://api.gill-cote-bistro.fr"+element['image']['url']+"'/>";
            }
        );
    console.log(content);
    }catch (e) {
        console.log('Error', e);
    }

}
displayDatas();
