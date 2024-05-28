const createLocationQuery = `
    INSERT INTO Location (
        location_id, location_name, city_id
    ) VALUES (
        ?, ?, ?
    )
`;

const getLocationByIdQuery = `
    SELECT *
    FROM Location
    WHERE location_id = ?
`;

const getAllLocationsQuery = `
    SELECT *
    FROM Location
`;

const updateLocationQuery = `
    UPDATE Location
    SET location_name = ?, city_id = ?
    WHERE location_id = ?
`;

const deleteLocationQuery = `
    DELETE FROM Location
    WHERE location_id = ?
`;

module.exports = {
    createLocationQuery,
    getLocationByIdQuery,
    getAllLocationsQuery,
    updateLocationQuery,
    deleteLocationQuery
}