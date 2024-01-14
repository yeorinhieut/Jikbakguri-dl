// utils/urlchecker.ts
export const identifySite = (url: string): string | null => {
    if (/^https?:\/\/yako\.red\/\w+\//.test(url.trim())) {
        return 'yako';
    }
    if (/^https?:\/\/av19.org\/(korea|javnew|bj|javsub|fcppv_jamak)\/\d+/.test(url.trim())) {
        return 'av19';
    }
    // Add more conditions for other sites as needed
    // Example:
    // if (/^https?:\/\/example\.com\/\w+\//.test(url.trim())) {
    //   return 'example';
    // }
    return null;
};
