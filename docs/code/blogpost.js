const API_BASE_URL = 'http://localhost:7071/api'
const COMMENT_SECTION_CONTAINER_ID = 'Blog-allCommentsContainer';
const COMMENT_CONTAINER_CLASS = 'Blog-commentContainer';
const COMMENT_NAME_CLASS = 'Blog-commentName';
const COMMENT_DATE_CLASS = 'Blog-commentDate';
const COMMENT_TEXT_CLASS = 'Blog-commentText';
const SUBMIT_COMMENT_BTN_ID = 'Blog-submitCommentBtn';
const SUBMIT_COMMENT_NAME_ID = 'Blog-submitCommentNameField';
const SUBMIT_COMMENT_TEXT_ID = 'Blog-submitCommentTextField';
const COMMENT_HEADER_ID = 'Blog-commentsHeader';

function addComments(comments) {
    if(comments.length === 0) {
        setHeaderDisplay('none');
        return;
    }

    let commentContainer = document.getElementById(COMMENT_SECTION_CONTAINER_ID)

    // sort comments
    comments.sort(function(x, y) {
        lhs = new Date(x['createdDt']);
        rhs = new Date(y['createdDt']);
        if (lhs < rhs) {
            return 1;
        }
        if (lhs > rhs) {
            return -1;
        }
        return 0;
    });

    comments.forEach(comment => {
        if(comment['text'] === null || comment['text'] === '') {
            // don't add
        }
        else {
            commentContainer.appendChild(getNewCommentElement(comment));
        }        
    });
}

function setHeaderDisplay(display) {
    let commentHeader = document.getElementById(COMMENT_HEADER_ID);
    commentHeader.style.display = display;
}

function getNewCommentElement(comment) {
    // add container
    let container = document.createElement('div');
    container.classList.add(COMMENT_CONTAINER_CLASS);
    
    // add name
    let name = document.createElement('div');
    name.classList.add(COMMENT_NAME_CLASS);
    name.innerText = comment['submittedBy'] === null? 'anonymous' : comment['submittedBy'];
    
    // add date
    let date = document.createElement('span');
    date.classList.add(COMMENT_DATE_CLASS);
    date.innerText = ` (${getDateString(comment['createdDt'])})`;
    
    // add text
    let text = document.createElement('div');
    text.classList.add(COMMENT_TEXT_CLASS);
    text.innerText = comment['text'] === null? '' : comment['text'];

    // add to container
    name.appendChild(date);
    container.appendChild(name);
    container.appendChild(text);

    return container;
} 

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

    return comments;
}


function getDateString(date) {
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric'
    };
    let dateString = new Date(date).toLocaleString('en-US', options);    
    return dateString.replaceAll('/', '-');
}


async function submitComment() {
    console.log('submitting comment!');
    let commenterName = document.getElementById(SUBMIT_COMMENT_NAME_ID);
    let commentText = document.getElementById(SUBMIT_COMMENT_TEXT_ID);

    if(commentText.value === null || commentText.value.trim() === '') {
        console.log('')
        return;
    }

    let response = await fetch(`${API_BASE_URL}/InsertComment?url=${window.location}`, { 
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            text: commentText.value, 
            submittedBy: commenterName.value
        })
    });

    // add to comment container
    let commentContainer = document.getElementById(COMMENT_SECTION_CONTAINER_ID);
    commentContainer.insertBefore(getNewCommentElement({
        'text': commentText.value,
        'submittedBy': commenterName.value,
        'createdDt': getDateString(new Date().toUTCString())
    }), commentContainer.firstChild);

    commenterName.value = '';
    commentText.value = '';

    // make sure header is showing
    setHeaderDisplay('block');
}

// on window load
(function(window, document, undefined) {  
    window.onload = init;
  
    async function init() {
        let submitCommentBtn = document.getElementById(SUBMIT_COMMENT_BTN_ID);
        submitCommentBtn.addEventListener("click", submitComment);

        let comments = await getComments();
        console.log(comments);

        addComments(comments);
    }
})(window, document, undefined);