// Declare variable
declare const account: string;

// Appends account subdomain and article ID generate a full URL
export function createFreshserviceSolutionUrl(articleId: string) {
    if (`${account}`.includes(".freshservice.com")) {  
        var url = `${account}` + "/support/solutions/articles/" + articleId
        }   
        else if (`${account}`.includes(".")) {
        var url = `${account}` + "/support/solutions/articles/" + articleId    
        }
        else {
        var url = `${account}` + ".freshservice.com/support/solutions/articles/" + articleId    
        }
    return url
}
