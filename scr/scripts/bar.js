import searchIcon from '../images/search.svg';

export function bar(){
    const bar = document.getElementById('bar');
 
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'place';
    input.placeholder = 'Enter city name';
    input.autocomplete = 'off';

    const button = document.createElement('button');
    button.id = 'SearchBtn';

    const img = document.createElement('img');
    img.src = searchIcon;
    img.alt = 'Search';
    img.width = 24;
    img.height = 24;

    button.appendChild(img);

    bar.appendChild(input);
    bar.appendChild(button);
}

