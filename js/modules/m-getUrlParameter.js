export default function getUrlParameter(sParam) {
    //gets the page url
    let pageUrl = window.location.search.substring(1);
    //splits it at & if more than one parameter
    let urlVariables = pageUrl.split('&');
    //for each variable in address field
    let product;
    urlVariables.forEach(variable => {
        let urlVariableSplittet = variable.split('=');
        if (urlVariableSplittet[0] == sParam) {
            product = urlVariableSplittet[1];
        }
    })
    //returns value
    return product;

}