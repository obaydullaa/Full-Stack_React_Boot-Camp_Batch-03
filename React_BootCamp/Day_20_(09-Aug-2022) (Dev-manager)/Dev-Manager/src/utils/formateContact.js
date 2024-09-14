
export const formateContact = (data) => {
    return {
        id: data.id,
        ...data.attributes,
    }
}