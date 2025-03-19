// export const getWeatherData = () => {
//     let promise = new Promise(function(resolve, reject) {
//         let data = fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/');
//         console.log(data.json());

//         resolve("It worked!");
//         reject("It didn't work!");
//     });
// }

export function getData(location) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=P49KBTG66S7JSRWWNDCTLJR4F`, { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .catch(function(err) {
            console.log(err);
        });
};

//Visual Crossing API uses the following main format for URL requests: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY