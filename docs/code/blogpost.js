const API_BASE_URL = 'http://localhost:7071/api'

async function getComments() {
    let response = await fetch(`${API_BASE_URL}/GetComments?url=${window.location}`, { 
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