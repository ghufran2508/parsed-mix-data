# parsed-mix-data
This repo only contains the solution to JSON.parse data which is mixed (object inside stringify object) to any level.

For example:
let data = {
    id: -1,
    event: {
        errors: 0, 
        data: JSON.stringify({
            name: 'Grand Parent',
            id: 3,
            data: JSON.stringify({
                name: 'Parent',
                id: 2,
                data: JSON.stringify({
                    name: 'child',
                    id: 1,
                }),
            }),
        }),
    }
}

This Solution will parse it upto 'child' object.
