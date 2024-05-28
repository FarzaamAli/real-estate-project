const dbStatusObject = {
    ok: 200,
    notFound: 404,
    dbError: 500
}

const accessData = async (query, [...queryParams]) => {
    try {
        const dbResponse = await db.promise().query(query, [...queryParams]);
        if (dbResponse[0].length == 0) {
            return { result: "user doesn't exist", dbStatus: dbStatusObject.notFound };
        }
        return { response: dbResponse[0][0], dbStatus: dbStatusObject.ok };
    } catch (err) {
        return { err };
    }
};

module.exports = {dbStatusObject, accessData}