const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita id ipsum obcaecati alias distinctio cumque, porro non optio perspiciatis, nam dolorem sed. Explicabo pariatur sunt at quos accusantium delectus'

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event){
        event.stopPropagation();
        const listContent = prompt('Favorite color?');
        this.textContent = listContent;

    };
};