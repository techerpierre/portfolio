export function getProjectRedirectURI(title: string, id: string): string {
    const formatedTitle = title.replaceAll(" ", "-").toLocaleLowerCase();
    return `/projects/${formatedTitle}/${id}`;
}