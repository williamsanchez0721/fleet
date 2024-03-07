export const success = (req, res, message = '', status = 200, data = '') => {
    res.status(status).send({
        error: false,
        status: status,
        message: message,
        body: data,
        meta: {
            "organization": "fleet",
            "authors": {
                "first name": "atsugula"
            },
        }
    })
}

export const error = (req, res, message = 'Internal error.', status = 500, data = '') => {
    res.status(status).send({
        error: true,
        status: status,
        message: message,
        body: data,
        meta: {
            "organization": "fleet",
            "authors": {
                "first name": "atsugula"
            },
        }
    })
}