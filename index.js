$(document).ready(function() {
  const githubUsername = "belqr";
  const endpoint = `https://api.github.com/users/${githubUsername}`;

  const profileAvatar = $(".profile-avatar");
  const profileName = $(".profile-name");
  const profileUsername = $(".profile-username");
  const profileRepos = $(".numbers-item:nth-child(1)");
  const profileFollowers = $(".numbers-item:nth-child(2)");
  const profileFollowing = $(".numbers-item:nth-child(3)");
  const profileLink = $(".profile-link");

  function getGithubProfile() {
    $.ajax({
      url: endpoint,
      method: "GET",
      beforeSend: function() {
        profileAvatar.text("Carregando...")
        profileName.text("Carregando...")
        profileUsername.text("Carregando...")
        profileRepos.find("h4 + span").text("...")
        profileFollowers.find("h4 + span").text("...")
        profileFollowing.find("h4 + span").text("...")
      },
      success: function(data) {
        profileAvatar.attr("src", data.avatar_url);
        profileName.text(data.name || "Nome não informado");
        profileUsername.text(`@${data.login}`);
        profileRepos.find("h4 + span").text(data.public_repos);
        profileFollowers.find("h4 + span").text(data.followers);
        profileFollowing.find("h4 + span").text(data.following);
        profileLink.attr("href", data.html_url).text("Ver perfil");
      },
      error: function() {
        alert("Erro ao carregar perfil do GitHub");
      }
    });
  }

  getGithubProfile();
})