export async function getAllClasses() {

    try{
        const response = await fetch('http://localhost:3000/classes', {
            crossDomain:true,
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'},
            
        });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createClass(data) {
    const response = await fetch(`http://localhost:3000/classes`, {
        crossDomain:true,
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',},
        body: JSON.stringify({name: data})
    })
    return await response.json();
}