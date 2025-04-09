export function getArticleRedirectURI(title: string, id: string) {
    const formatedTitle = title.replaceAll(" ", "-").toLocaleLowerCase();
    return `/blog/${formatedTitle}/${id}`;
}