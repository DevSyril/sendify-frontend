export function loginResponse(response) {
    if (response.message === "Echec de validation.") {
        if (response.data.email != null)
            return response.data.email[0];
        if (response.data.password != null)
            return response.data.password[0];
    }
    return null;
}

export function registerResponse(response) {

    if (response.message === "Echec de validation.") {
        if (response.data.username != null)
            return response.data.username[0];

        if (response.data.email != null)
            return response.data.email[0];

        if (response.data.password != null)
            return response.data.password[0];

        if (response.data.passwordConfirm != null)
            return response.data.passwordConfirm[0];
    }

    return null;
}

export function resetPasswordResponse(response) {

    if (response.message === "Echec de validation.") {

        if (response.data.email != null)
            return response.data.email[0];

    }

    return null;
}