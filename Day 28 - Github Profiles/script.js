const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
	try {
		const { data } = await axios.get(APIURL + username);
		createUserCard(data);
		getRepos(username);
	} catch (error) {
		if (error.response.status === 404) {
			createErrorCard("user not found");
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios.get(APIURL + username + "/repos?sort='created'");
		addReposToCard(data);
	} catch (error) {
		createErrorCard("Problem fetching repos");
	}
}

function createUserCard(userData) {
	const cardHtml = `  <div class="card">
      <div>
        <img src="${userData.avatar_url}" alt="${userData.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio}</p>
        <ul>
          <li>${userData.followers} <strong>Followers</strong></li>
          <li>${userData.following} <strong>Following</strong></li>
          <li>${userData.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">
        </div>
      </div>
    </div>`;
	main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
	const reposEl = document.getElementById("repos");
	repos.slice(0, 5).forEach((repo) => {
		const repoLink = document.createElement("a");
		repoLink.classList.add("repo");
		repoLink.href = repo.html_url;
		repoLink.target = "_blank";
		repoLink.innerText = repo.name;

		reposEl.appendChild(repoLink);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = search.value;
	if (user) {
		getUser(user);
		search.value = "";
	}
});

function createErrorCard(message) {
	const cardHtml = `
  <div class="card">
  <h1>${message}</h1>
  </div>
  `;
	main.innerHTML = cardHtml;
}
