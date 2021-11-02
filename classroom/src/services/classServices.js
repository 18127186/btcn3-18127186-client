export async function getAllClasses() {

    try{
        const response = await fetch('/classes');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createClass(data) {
    const response = await fetch(`/classes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: data})
    })
    return await response.json();
}