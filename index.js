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

console.log("Mix Data: ", data);

const parseStringify = (data) => {
    let obj = data;
    for(const key in obj) {
        if(typeof(obj[key]) === 'string') {
            try {
                let parse = JSON.parse(obj[key]);
                obj[key] = parseStringify(parse);
            } catch(e) {

            }
        }
        else if(typeof(obj[key]) === 'object') {
            obj[key] = parseStringify(obj[key]);
        }
    }
    return obj;
}

let parsedObject = parseStringify(data);
console.log("Parse Data: ", parsedObject);
console.log("Child Exist: ", parsedObject.event.data.data.data);