export function getData(location) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=P49KBTG66S7JSRWWNDCTLJR4F`, { mode: 'cors' })
        .then(function(response) {
            if(!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            return response.json();
        })
        .catch(function(error) {
            throw new Error(`Error ${error.status}`);
        });
};