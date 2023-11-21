async function getComments() {
    // let response = await fetch(`${API_BASE_URL}/GetComments?url=${window.location}`, { 
    let response = await fetch('http://localhost:7071/api/GetComments?url=http://localhost:1000/sunday-meditation-taiko-forever/', { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    let json = await response.json();

    let comments = [];
    for(let i = 0; i < json.length; i++) {
        let comment = {
            'text': json[i]['text'],
            'submittedBy': json[i]['submittedBy'],
            'createdDt': json[i]['createdDt']
        }

        comments.push(comment);
    }

    console.log(comments);
    return comments;
}

getComments();