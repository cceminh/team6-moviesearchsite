export function initializeCommentSystem() {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    let editIndex = -1;
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('id');
    const pageKey = 'comments_' + pageId;
    function loadCommentsFromLocalStorage() {
        const comments = JSON.parse(localStorage.getItem(pageKey)) || [];
        comments.forEach(comment => {
            addCommentToUI(comment);
        });
    }
    function addCommentToUI(comment) {
        const commentElement = document.createElement('li');
        commentElement.innerHTML = `
            <strong>${comment.username}</strong> ${comment.commentText}
            <button data-action="edit">Edit</button>
            <button data-action="delete">Delete</button>
        `;
        commentList.appendChild(commentElement);
    }
    function editComment(event) {
        const listItem = event.target.parentElement;
        editIndex = Array.from(listItem.parentNode.children).indexOf(listItem);
        const commentElement = listItem.querySelector('strong');
        const commentText = listItem.querySelector(':not(strong)').textContent.trim();
        document.getElementById('username').value = commentElement.textContent.trim();
        document.getElementById('comment').value = commentText;
        document.getElementById('password').value = '';
    }
    function editCommentInUI(comment) {
        const listItem = commentList.children[editIndex];
        const commentElement = listItem.querySelector('strong');
        commentElement.innerHTML = comment.username;
        document.getElementById('comment').value = '';
        document.getElementById('password').value = '';
        listItem.innerHTML = `
            <strong>${comment.username}</strong>: ${comment.commentText}
            <button data-action="edit">Edit</button>
            <button data-action="delete">Delete</button>
        `;
    }
    function deleteComment(event) {
        const listItem = event.target.parentElement;
        const index = Array.from(listItem.parentNode.children).indexOf(listItem);
        commentList.removeChild(listItem);
        const comments = getCommentsFromUI();
        comments.splice(index, 1);
        saveCommentsToLocalStorage(comments);
    }
    function getCommentsFromUI() {
        const comments = [];
        commentList.querySelectorAll('li').forEach(commentElement => {
            const username = commentElement.querySelector('strong').textContent;
            const commentText = commentElement.textContent.split(': ')[1];
            comments.push({ username, commentText });
        });
        return comments;
    }
    function saveCommentsToLocalStorage(comments) {
        comments = comments || getCommentsFromUI();
        localStorage.setItem(pageKey, JSON.stringify(comments));
    }
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const commentText = document.getElementById('comment').value;
        const password = document.getElementById('password').value;
        const comment = { username, commentText };
        if (editIndex === -1) {
            addCommentToUI(comment);
        } else {
            editCommentInUI(comment);
            editIndex = -1;
        }
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
        document.getElementById('password').value = '';
        saveCommentsToLocalStorage();
    });
    document.addEventListener('click', (event) => {
        if (event.target.dataset.action === 'edit') {
            editComment(event);
        } else if (event.target.dataset.action === 'delete') {
            deleteComment(event);
        }
    });
    loadCommentsFromLocalStorage();
}