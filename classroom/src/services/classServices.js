export async function getAllClasses() {

    try{
        const response = await fetch('https://btcn3-18127186-server.herokuapp.com/classes', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createClass(data) {
    const response = await fetch(`https://btcn3-18127186-server.herokuapp.com/classes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: data})
    })
    return await response.json();
}