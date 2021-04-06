const URI = 'https://randomuser.me/api/?results=10';

// let username = document.querySelector('h2');

const fetchUsers = async () => {
  const response = await fetch(URI);

  const users = await response.json().then((data) => {
    return data.results;
  });

  console.log(users, 'USERS ');

  let userProfile = document.querySelector('#profile');

  users.map(({ name, picture }) => {
    console.log(name, picture, 'response');

    let fullName = `${name.title} ${name.first} ${name.last}`;

    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = fullName;

    let pictureTag = document.createElement('img');
    pictureTag.src = picture.thumbnail;
    picture.alt = fullName;

    // now put them in a 'div'

    let profileWrapper = document.createElement('div');
    profileWrapper.classList.add('person');
    profileWrapper.appendChild(nameParagraph);
    profileWrapper.appendChild(pictureTag);

    userProfile.appendChild(profileWrapper);

    // username.innerHTML += `${name.title} ${name.first} ${name.last}`;
    // userProfileImg += `<img alt="Github user" class="avatar-bg" src=${picture.thumbnail} />`;
  });
};

fetchUsers();
