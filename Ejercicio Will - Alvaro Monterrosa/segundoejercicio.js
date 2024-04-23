document.addEventListener("DOMContentLoaded", async function() {
    const userInfoContainer = document.getElementById("user-info");

    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const userData = await response.json();

        const userInfoHTML = `
            <img src="${userData.avatar_url}" alt="Profile Picture" width="100">
            <p><strong>Username:</strong> ${userData.login}</p>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Location:</strong> ${userData.location}</p>
            <p><strong>Followers:</strong> ${userData.followers}</p>
            <p><strong>Following:</strong> ${userData.following}</p>
        `;
        userInfoContainer.innerHTML = userInfoHTML;
    } catch (error) {
        console.error("Error fetching user data:", error);
        userInfoContainer.innerHTML = "<p>Error fetching user data. Please try again later.</p>";
    }
});
